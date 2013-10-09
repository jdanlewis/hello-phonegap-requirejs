({
	baseUrl: 'js/lib',
	paths: {
		app: '..',
		bootstrap: 'bootstrap/dist/js/bootstrap.min',
		requireLib: 'require'
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		}
	},
	include: 'requireLib',
	name: 'app/main',
	out: 'main.min.js'
})
