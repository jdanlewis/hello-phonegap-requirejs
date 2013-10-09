/*global cordova*/
define(['jquery', 'app/db', 'app/hello'],
	function ($, db, hello) {

		// Document is ready
		$(function() {
			var checkCordova, checkInterval, startup;

			// Start the app when the device is ready
			startup = function() {
				db.startup();
				hello.startup();
				hello.show();
			};

			// Check for Phonegap (Cordova) to avoid race conditions
			// with the deviceready event
			checkCordova = function() {
				// Check if Cordova exists (multiple conditions  may be redundant)
				if (window.cordova && window.cordova.exec && navigator.app) {
					// Stop polling
					clearInterval(checkInterval);
					// Listen for the deviceready event
					document.addEventListener('deviceready', startup, false);
				}
			};

			// Poll for Phonegap.
			// For local development, startup may need to be called directly
			// since the deviceready event does not exist.
			checkInterval = setInterval(checkCordova, 200);

		});
	}
);
