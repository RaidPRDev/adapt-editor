// consoleTools.js
module.exports = {

     init: function(process, isEnabled)
     {
          this.isTraceEnabled = isEnabled;
          this.trace = this.trace.bind(this);
          this.process = process;
     },

     showAppConsoleHeader: function()
     {
          this.clear();
          console.log("======================================\n");
          console.log(" Adapt Editor v1.0.0\n");
          console.log(" CTRL-C to Exit Application\n");
          console.log("======================================\n");
          console.log("Initializing...");
     },

     showExitHeader: function()
     {
          this.clear();
          console.log("======================================\n");
          console.log(" Adapt Editor v1.0.0\n");
          console.log(" Application closed\n");
          console.log("======================================\n");
     },

     clear: function()
     {
          this.process.stdout.write("\u001b[2J\u001b[0;0H");
          console.clear();
     },

     trace: function ()
     {
          if (!this.isTraceEnabled) return;

          const args = Array.prototype.slice.call(arguments);
          console.log.apply(console, args);
     }

};
