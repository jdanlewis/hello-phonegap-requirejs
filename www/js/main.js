require.config({
	baseUrl: 'js/lib',
	paths: {
		app: '..',
		bootstrap: 'bootstrap/dist/js/bootstrap.min'
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		}
	}
});
require(['bootstrap', 'app/app']);
