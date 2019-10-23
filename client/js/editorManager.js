function EditorManager(options)
{
     // capture url parameters
     this.urlParams = this.getAllUrlParams();
     this.isSCORMEnabled = (this.urlParams.lms && this.urlParams.lms === 1);
     this.adaptURL = this.setAdaptURL("http://localhost:9001");

     // init json data
     this.loadedData = {
          path: "course/en/",
          file: "components.json",
          data: {}
     };

     // ui controls
     this.$selectJSON = $('.select-selected');
     this.$saveButton = $('#saveButton');
     this.$reloadPreview = $('#reloadButton');

     // layout elements
     this.navContainer = document.getElementsByClassName("editor-nav")[0];
     this.mainContainer = document.getElementsByClassName("editor-body");
     this.previewContainer = document.getElementById("previewFrame");
     this.previewIFrame = document.getElementById("preview");

     // editor elements
     this.editorContainer = document.getElementById("jsoneditor");
     this.editorOptions = {
		mode: 'tree',
		modes: ['tree', 'code'],
          templates: options.templates,
		//indentation: 2
		search: true,
		statusBar: false,
		navigationBar: false,
		onNodeName: this.onNodeName.bind(this),
		onEvent: this.onEvent.bind(this)
	 };
     this.editor = null;

     this.initialize();
}

EditorManager.prototype.initialize = function()
{
     // initialize iframe container source
     this.previewIFrame.setAttribute("src", this.adaptURL);

	// set events
     this.$selectJSON.on("change", this.onSelectChange.bind(this));
     this.$saveButton.on("click", this.onSaveClick.bind(this));
	this.$reloadPreview.on("click", this.onReloadPreview.bind(this));

	// create the editor
	this.editor = new JSONEditor(this.editorContainer, this.editorOptions);

     // load initial json
	this.loadJSON("../" + this.loadedData.path + this.loadedData.file);

     // set resize listener
     $(window).on("resize", this.onResize.bind(this));

     // receive messages from Adapt Course
     $(window).on("message", this.onMessage.bind(this));

     // update layout
     this.onResize();

     $(window).on("onbeforeunload", this.onPageDispose.bind(this));

     // custom expand on label
     setTimeout(this.onInitComplete.bind(this), 1000);
}

EditorManager.prototype.onPageDispose = function(e)
{
     console.log("onPageDispose");

     this.onSocketDisconnected();
}

EditorManager.prototype.onInitComplete = function(e)
{
     console.log("EditorManager initialized");
     this.applyCustomEditorEvents();
     this.initSocketConnection();
}

EditorManager.prototype.onResize = function(e)
{
     const screenH = $(window).height();
     let navHeight = this.navContainer.getBoundingClientRect().height;
     const navPadding = parseInt($(this.navContainer).css('paddingLeft'), 10);
     navHeight += navPadding;

     $(this.editorContainer).height(screenH - navHeight);
     $(this.previewContainer).height(screenH - navHeight);
}

// UI Control Events
EditorManager.prototype.onReloadPreview = function(e)
{
     if (!this.socketio.connected)
     {
          alert("No Connection, restart Server");
          return;
     }

     this.previewIFrame.contentWindow.postMessage( { reload: true }, this.adaptURL);
}

// UI Control Events
EditorManager.prototype.onSaveClick = function(e)
{
     // console.log("EditorManager.onSaveClick()");
     if (!this.socketio.connected)
     {
          alert("No Connection, restart Server");
          return;
     }

     this.setUIControls(false);

     const saveServerData = {
          path: "../src/" + this.loadedData.path,
          file: this.loadedData.file,
          data: this.editor.get()
     };

     let json = JSON.stringify(saveServerData);
     let xhr = new XMLHttpRequest();
     xhr.open("POST","save",true);
     xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
     xhr.onload = function ()
     {
          var data = JSON.parse(xhr.responseText);
          if (xhr.readyState == 4 && xhr.status == "201") {
               console.log(data);
          }
          else
          {
               console.log(data);
          }
     }
     xhr.send(json);
}

// UI Control Events
EditorManager.prototype.onSelectChange = function(e)
{
     // console.log("onSelectChange");
     if (!this.socketio.connected)
     {
          alert("No Connection, restart Server");
          return;
     }

     // selected item and path attribute
     const $element = $('.same-as-selected');
     this.loadedData.path = $element.attr("data-path");
     this.loadedData.file = $element.attr("data-value");

     // load json data
     this.loadJSON("../" + this.loadedData.path + this.loadedData.file);
}

EditorManager.prototype.loadJSON = function(file)
{
     const ref = this;
     $.get(file, function(response)
     {
          ref.editor.set(response);
          ref.editor.setName(ref.loadedData.file);
          // ref.editor.expandAll();
     });
}

// Triggered when an event occcurs within the JSON Editor
EditorManager.prototype.onEvent = function(node, event)
{
	/*
     console.log("EditorManager.onEvent()");
     if (event.type === 'click')
     */
}

EditorManager.prototype.onNodeName = function(item)
{
	let nodeName = null;
	switch (this.loadedData.file)
	{
		case "contentObjects.json":
		case "articles.json":
		case "blocks.json":
			if (item.type === "array") {
				nodeName = item.size + " items";
			}
			else if (item.type === "object")
			{
				if (item.path.length == 1 && item.children.length > 0)
				{
					nodeName = "<span>" + item.children[0].value + "</span>";
				}
			}
			break;
		case "components.json":
			if (item.type === "array") {
				nodeName = item.size + " items";
			}
			else if (item.type === "object")
			{
				if (item.path.length == 1 && item.children.length > 0)
				{
					let id = this.findChildIndexByName(item.children, "_id");
					let component = this.findChildIndexByName(item.children, "_component");

					nodeName = "<span>" + id + " | " + component + "</span>";
				}
			}
			break;
	}

	return nodeName;
}

EditorManager.prototype.findChildIndexByName = function(children, childKey)
{
	let childIndex = 0;
	let childValue = "";
	for (let i = 0; i < children.length; i++)
	{
		if (children[i].field === childKey)
		{
			childIndex = i;
			childValue = children[i].value;
			break;
		}
	}

	return childValue;
}

EditorManager.prototype.setAdaptURL = function(url)
{
     return (this.isSCORMEnabled) ? url + "/scorm_test_harness.html" : url;
}

EditorManager.prototype.onMessage = function(e)
{
     // console.log("EditorManager.onMessage(data)", e.originalEvent);
}

EditorManager.prototype.applyCustomEditorEvents = function(e)
{
     // enable item buttons
     $('.jsoneditor-object > span').on('click', function(e) {
          let $mainNode = $(e.target).parent().parent().parent();
          const expandButton = $mainNode.first().find('.jsoneditor-button');
          expandButton.click({ apply : function(){} });
     });
}

EditorManager.prototype.setUIControls = function(enabled)
{
     if (enabled)
     {
          this.$saveButton.removeClass("disable-button");
          this.$reloadPreview.removeClass("disable-button");
          this.$saveButton.html("Save");
     }
     else
     {
          this.$saveButton.addClass("disable-button");
          this.$reloadPreview.addClass("disable-button");
          this.$saveButton.html("Saving...");
     }
}

EditorManager.prototype.initSocketConnection = function()
{
     console.log("EditorManager.initSocketConnection");

     // socket events
     this.onBuildComplete = "buildUpdateComplete";
     this.onEditorDisconnected = "editorDisconnected";

     this.isConnection = false;
     this.socketio = io.connect("localhost:3000");
     /*
     const ref = this;
     this.socketio.on(this.onBuildComplete, function(data) {
          ref.setUIControls(true);
     });*/
     this.socketio.on('connect', this.onSocketConnected.bind(this));
     this.socketio.on(this.onBuildComplete, this.onSocketBuildComplete.bind(this));
     this.socketio.on(this.onEditorDisconnected, this.onSocketDisconnected.bind(this));
}

EditorManager.prototype.onSocketConnected = function()
{
     console.log("EditorManager.onSocketConnected");

     // enable ui controls
     this.isConnection = this.socketio.connected;
}


EditorManager.prototype.onSocketBuildComplete = function()
{
     console.log("EditorManager.onSocketBuildComplete");

     // enable ui controls
     this.setUIControls(true);
}

EditorManager.prototype.onSocketDisconnected = function()
{
     console.log("EditorManager.onSocketDisconnected");
     // io.disconnect();
     this.socketio.disconnect();
}

EditorManager.prototype.getAllUrlParams = function(url)
{
     // get query string from url (optional) or window
     var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

     // we'll store the parameters here
     var obj = {};

     // if query string exists
     if (queryString)
     {
          // stuff after # is not part of query string, so get rid of it
          queryString = queryString.split('#')[0];

          // split our query string into its component parts
          var arr = queryString.split('&');

          for (var i = 0; i < arr.length; i++)
          {
               // separate the keys and the values
               var a = arr[i].split('=');

               // set parameter name and value (use 'true' if empty)
               var paramName = a[0];
               var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
               var paramRealValue = typeof (a[1]) === 'undefined' ? true : a[1];

               // (optional) keep case consistent
               paramName = paramName.toLowerCase();
               if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

               // if the paramName ends with square brackets, e.g. colors[] or colors[2]
               if (paramName.match(/\[(\d+)?\]$/))
               {
                    // create key if it doesn't exist
                    var key = paramName.replace(/\[(\d+)?\]/, '');
                    if (!obj[key]) obj[key] = [];

                    // if it's an indexed array e.g. colors[2]
                    if (paramName.match(/\[\d+\]$/))
                    {
                         // get the index value and add the entry at the appropriate position
                         var index = /\[(\d+)\]/.exec(paramName)[1];
                         obj[key][index] = paramRealValue;
                    }
                    else
                    {
                         // otherwise add the value to the end of the array
                         obj[key].push(paramValue);
                    }
               }
               else
               {
                    // we're dealing with a string
                    if (!obj[paramName])
                    {
                         // if it doesn't exist, create property
                         obj[paramName] = paramRealValue;
                    }
                    else if (obj[paramName] && typeof obj[paramName] === 'string')
                    {
                         // if property does exist and it's a string, convert it to an array
                         obj[paramName] = [obj[paramName]];
                         obj[paramName].push(paramRealValue);
                    }
                    else
                    {
                         // otherwise add the property
                         obj[paramName].push(paramRealValue);
                    }
               }
          }
     }
     return obj;
}
