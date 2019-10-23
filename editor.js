// load libraries
this.process = require('process');
this.console = require('./tools/consoleTools');
this.gruntTools = require('./tools/gruntAdaptTools');
this.serverController = require('./tools/serverController');

// init properties
this.console.init(this.process, false);
this.trace = this.console.trace;
this.hasEditorLaunched = false;
this.isSCORMEnabled = false;

// display header
this.console.showAppConsoleHeader();

/* Ask user if we are loading SCORM
const readline = require('readline').createInterface({
     input: process.stdin,
     output: process.stdout
})
readline.question(`Using SCORM [Default:n]? (y/n)`, (name) => {
     //name = name.toLocaleLowerCase();
     //isSCORMTestingEnabled = (name === 'y');
     //readline.close();
     //initializeServers();
});
*/

// init server controller
this.serverController.initialize(this, {

     serverHost: "http://localhost",
     editorServerPort: 3000,
     adaptServerPort: 9001,
     isSCORMEnabled: false,
     jsonLimit: "70mb",
     jsonParameterLimit: 70000,
     onServerInitialized: onServerInitialized.bind(this),
     onServerExit: onServerExit.bind(this)

});

// triggered when adapt server has started
function onServerInitialized()
{
     this.trace("onServerInitialized");

     // once the server is initialized, run adapt grunt-dev
     this.gruntTools.initialize(this, { verbose: true });
     this.gruntTools.startGruntDevWatch();
}

// triggered when closing app, CTRL-C
function onServerExit()
{
     this.trace("onServerExit");

     // display header
     this.console.showExitHeader();

     // close application process
     this.process.exit();
}
