// serverController.js
const express = require('express');
const fs = require('fs');
const jsonfile = require('jsonfile');
const copydir = require('copy-dir');

module.exports = {
     initialize: function (editor, params) {

          this.editor = editor;
          this.trace = this.editor.trace;
          this.config = params;
          this.config.appName = "editor";

          this.editorApp = null;
          this.adaptApp = null;
          this.editorServer = null;
          this.clientSocket = null;
          this.io = null;

          if (this.config.isSCORMEnabled) this.trace("Adapt SCORM Enabled");

          // check for required files before initializing servers
          this.checkForEditorRequiredFiles();
     },

     onEditorRequiredFilesInstalled: function()
     {
          this.trace('onEditorRequiredFilesInstalled()');

          this.initializeServers();
     },

     initializeServers: function()
     {
          // init Adapt Editor Server
          this.editorApp = express();
          this.editorApp.use(express.static('../src'));
          // this.editorApp.use(express.json());
          this.editorApp.use(express.json({ limit: this.config.jsonLimit }));
          this.editorApp.use(express.urlencoded({
               limit: this.config.jsonLimit,
               extended: true,
               parameterLimit: this.config.jsonParameterLimit }));

          this.editorServer = this.editorApp.listen(
               this.config.editorServerPort, this.onEditorServerListen.bind(this));

          // initialize Adapt Server
          this.adaptApp = express();
          this.adaptApp.use(express.static('../build'));
          this.adaptServer = this.adaptApp.listen(
               this.config.adaptServerPort, this.onAdaptServerListen.bind(this));

          // initialize io socket connections
          this.io = require('socket.io')(this.editorServer);
          this.io.on('connection', this.onSocketConnection.bind(this));

          this.setRouteFunctions();
          this.handleOnExitApplication();
     },

     // Server Listeners
     onEditorServerListen: function()
     {
          console.log("Adapt Editor Initialized");
     },

     onAdaptServerListen: function()
     {
          console.log("Adapt Server Initialized");

          if (this.config.onServerInitialized) this.config.onServerInitialized();
     },

     setRouteFunctions: function()
     {
          this.trace("setRouteFunctions");

          // adapt editor Save
          this.editorApp.post('/editor/save', function(req,res) {

               // grab json data
               let jsonData = req.body;
               //console.log("jsonData.path:", jsonData.path);
               //console.log("jsonData.file:", jsonData.file);

               jsonfile.writeFile(jsonData.path + jsonData.file,
                    jsonData.data, { spaces: 4, EOL: '\r\n' },
                    function (err) {
                         if (err) {
                              console.error("ERROR", err);
                         }
                         else
                         {
                              res.send({
                                   file: jsonData.file,
                                   message: jsonData.file + " saved."
                              });
                         }
              });
          });
     },

     // tiggerred when socket has a connection
     onSocketConnection: function(client)
     {
          console.log("Editor Connection established");

          this.clientSocket = client;
          this.clientSocket.on("disconnect", this.onClientSocketDisconnect.bind(this));
     },

     // tiggerred when socket connection is closed
     onClientSocketDisconnect: function()
     {
          this.trace("onClientSocketDisconnect");

          // let the client know the server is disconnected
          if (this.clientSocket) this.clientSocket.emit("editorDisconnected" ,{ message: "" });

          this.clientSocket = null;
     },

     // exit process handler
     handleOnExitApplication: function()
     {
          // capture output log
          let rl = require("readline").createInterface({
               input: this.editor.process.stdin,
               output: this.editor.process.stdout
          });

          // check if on windows
          if (this.editor.process.platform === "win32")
          {
               rl.on("SIGINT", this.onReadLineSigInt.bind(this));
          }

          // handle process output
          this.editor.process.on("SIGINT", this.onServerExit.bind(this));
     },

     onReadLineSigInt: function()
     {
          this.editor.process.emit("SIGINT");
     },

     checkForEditorRequiredFiles: function() {
          this.trace('checkForEditorRequiredFiles()');

          copydir.sync('./client', '../src/editor', {
               utimes: true,  // keep add time and modify time
               mode: true,    // keep file mode
               cover: true    // cover file when exists, default is true
          });

          this.checkForExtension();
     },

     checkForExtension: function() {
          this.trace('checkForAdaptExtension()');

          const path = '../src/extensions/adapt-sr-editor-extension/js/adapt-sr-editor-extension.js';
          const ref = this;
          fs.access(path, fs.F_OK, (err) => {
               if (err)
               {
                    //console.error(err);
                    copydir.sync('./extensions/adapt-sr-editor-extension', '../src/extensions/adapt-sr-editor-extension', {
                         utimes: true,  // keep add time and modify time
                         mode: true,    // keep file mode
                         cover: true    // cover file when exists, default is true
                    });
                    //console.log('checkForExtension.DONE!');
               }
               ref.onEditorRequiredFilesInstalled();
          });
     },

     onServerExit: function()
     {
          if (this.clientSocket) this.clientSocket.disconnect();
          if (this.config.onServerExit) this.config.onServerExit();
          else this.editor.process.exit();
     }
};
