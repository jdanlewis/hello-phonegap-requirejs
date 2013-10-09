/*global localStorage*/
define([],
	function () {

	// Get a value from local storage 
	var get = function(key) {
		var value = localStorage[key];
		if (value) {
			value = JSON.parse(value);
		}
		return value;
	};

	// Set a key's value in local storage
	var set = function(key, value) {
		localStorage[key] = JSON.stringify(value);
	};

	// Return public methods
	return {
		startup: function() {
			if(!get('message')) {
				set('message', 'Hello, world!');
			}
		},
		get: get,
		set: set
	};

	}
);
