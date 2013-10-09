# Hello, Phonegap

This is an example project demonstrating Phonegap 3.0.0 integration with
RequireJS, Bootstrap 3.0, and HTML5 local storage for persistent data.

## Pre-requisites

Install the [Android SDK](http://developer.android.com/sdk/index.html).

Download the [NodeJS](http://nodejs.org/download/) source code or a pre-built
installer for your platform.

Install [Phonegap](http://phonegap.com/install/):

	$ npm install -g phonegap

Install the `grunt-cli` command line tools:

	$ npm install -g grunt-cli

Install [Bootstrap dependencies](https://github.com/twbs/bootstrap) and
build the Bootstrap CSS and JavaScript:

	$ cd www/js/lib/bootstrap
	$ npm install
	$ grunt dist

## Building the Project

In the `www` folder, compile the app's JavaScript using the RequireJS optimizer:

	$  node r.js -o build.js

Build the native app and test on a device:

	$ phonegap run android
