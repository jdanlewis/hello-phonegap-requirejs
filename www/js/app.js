/*global cordova*/
define(['jquery', 'app/db', 'app/hello'],
	function ($, db, hello) {

		var checkCordova, startup;

		// Start the app when the device is ready
		startup = function() {
			// Wait for document ready
			$(function() {
				db.startup();
				hello.startup();
				hello.show();
			});
		};

		// Check for Phonegap (Cordova) to avoid race conditions
		// with the deviceready event
		checkCordova = function checkCordova() {
			// Check if Cordova exists
			if (window.cordova && window.cordova.exec) {
				// Listen for the deviceready event
				document.addEventListener('deviceready', startup, false);
			} else {
				// If Cordova does not exist, check again in 16ms
				setTimeout(checkCordova, 16);
			}
		};

		// Poll for Phonegap.
		// For local development, startup may need to be called directly
		// since the deviceready event does not exist.
		checkCordova();
	}
);
