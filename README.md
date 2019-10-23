# adapt-editor
Node JS Editor 

This application allows you to edit the Adapt json content, while viewing the application in real-time.  The Editor and the Application will communicate using socket connections.  

Further features to be added:
* More debug tools
* Ability to detect other json files from other extensions
* Be able to launch the app in its own tab without the Editor.
* Better GRUNT build detection and features
* Update the UI experience a bit


## setup
The editor needs to live in the Root folder of your Adapt application.

In the Editor folder run:

```npm install```

```npm start```

Please note when running for the first time, the Editor will try to detect the Editor Adapt Extension, it wil auto install this for you at runtime.
