/*global localStorage*/
define(['jquery', 'app/db'],
	function ($, db) {

		var node;

		var startup = function() {
			node = $('#hello');
		};

		var show = function() {
			var message = db.get('message');
			node.html(message);
		};

		// Return public methods
		return {
		   startup: startup,
		   show: show
		};

	}
);
