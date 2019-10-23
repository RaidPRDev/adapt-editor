define(function(require) {

	var Adapt = require('coreJS/adapt');
	Adapt.once('adapt:initialize', function() {

		let config = Adapt.config.has('_adaptEditor') ? Adapt.config.get('_adaptEditor') : { _isEnabled: true };
		if(config && config._isEnabled)
		{
			// console.log("Adapt.Editor.Extension _isEnabled:", config._isEnabled);

			// Receive messages from Adapt Editor
		     $(window).on("message", onMessage);
			function onMessage(event)
			{
				const data = event.originalEvent.data;
				if (data.reload) window.location.reload(false);
			}
		}
	});
});
