// gruntAdaptTools.js
const { exec } = require('child_process');
const open = require('open');

module.exports = {

     initialize: function(editor, params)
     {
          this.editor = editor;
          this.config = editor.serverController.config;
          this.process = editor.process;
          this.trace = editor.trace;
          this.verbose = (params.verbose) ? params.verbose : false;
          this.execGruntDev = null;
          this.progressIcon = ["|","/","-","\\","%"];
          this.progressIndex = 0;

          this.trace("GruntTools.initialize");
     },

     startGruntDevWatch: function()
     {
          // setup progress indicators
          this.trace(" ");
          this.process.stdout.write("Building course "+this.progressIcon[this.progressIndex]+" \r");

          // change directory back to adapt src root
          this.process.chdir('../');

          // run grunt dev and listen to exec's output log
          this.execGruntDev = exec('grunt dev');
          this.execGruntDev.stdout.on("data", this.onSTDOutData.bind(this));
          this.execGruntDev.stderr.on("data", this.onStdErrorData.bind(this));
          this.execGruntDev.on("close", this.onGruntClosed.bind(this));
     },

     onSTDOutData: function(data)
     {
          if (!this.isDataEmpty(data) && this.verbose)
               console.log(data);

          if (this.editor.hasEditorLaunched)
          {
               // hacky but works, we detect when Waiting is found in log string
               if (data.indexOf("Waiting") > -1)
               {
                    // this.trace("FINISHED UPDATING");
                    // let the client know the build has finished
                    if (this.editor.serverController.clientSocket)
                         this.editor.serverController.clientSocket.emit("buildUpdateComplete", { message: "" });
               }
               return;
          }

          if (this.progressIndex < this.progressIcon.length - 1) this.progressIndex++; else this.progressIndex = 0;
          this.process.stdout.write("Building course "+this.progressIcon[this.progressIndex]+" \r");

          // wait until we reach the end of dev watch, hacky but works
          if (data.indexOf("Waiting") > -1 && !this.editor.hasEditorLaunched)
          {
               this.trace('Build complete, watching...');

               // go back to root editor dir
               this.process.chdir('editor');

               // launch flag set
               this.editor.hasEditorLaunched =  true;

               // launch browser
               let url = this.config.serverHost + ":" + this.config.editorServerPort;
               url += "/" + this.config.appName;
               if (this.editor.isSCORMEnabled) url += "/lms=1";
               open(url);
          }
     },

     onStdErrorData: function(data)
     {
          this.trace("Grunt.onStdErrorData");
          console.error(`stderr: ${data}`);
     },

     onGruntClosed: function(code)
     {
          this.trace("Grunt.onGruntClosed");
          this.trace(`child process exited with code ${code}`);
     },

     isDataEmpty: function(dataLog)
     {
          return (!dataLog || (0 === dataLog.length && /^\s*$/.test(dataLog)));
     }

};
