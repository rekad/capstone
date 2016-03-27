this.addEventListener('install', function(event) {

	console.log('installing')
	event.waitUntil(
		caches.open('v1').then(function(cache) {
			return cache.addAll([
				'/index.html',

				// linked files in index.html
				'/bootstrap/dist/css/bootstrap.min.css',
				'/font-awesome/css/font-awesome.min.css',
				'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css',
				'/admin-lte/dist/css/AdminLTE.min.css',
				'/admin-lte/dist/css/skins/skin-blue.min.css',
				'/admin-lte/bootstrap/js/bootstrap.min/js',
				'/admin-lte/plugins/jQuery/jQuery-2.1.4.min.js',
				'/admin-lte/dist/js/app.min.js',
				'/admin-lte/dist/img/avatar3.png',
				'admin-lte/bootstrap/js/bootstrap.min.js',

				'/font-awesome/fonts/fontawesome-webfont.woff2?v=4.5.0',

				'/style.css',
				'/lodash/index.js',
				'/pouchdb/dist/pouchdb.js',
				'/pouchdb-authentication/dist/pouchdb.authentication.js',
				'/angular/angular.js',
				'/angular-animate/angular-animate.js',
				'/angular-ui-router/release/angular-ui-router.js',
				'/angular-ui-bootstrap/ui-bootstrap.js',
				'/angular-ui-bootstrap/ui-bootstrap-tpls.js',
				'/socket.io-client/socket.io.js',
				'/main.js',

				// template files
				'/js/add-data/add-data-submit.view.html',
				'/js/add-data/add-data.view.html',
				'/js/analysis/analysis.view.html',
				'/js/common/directives/navbar/navbar.html',
				'/js/common/directives/individual-forms/checkboxes-directive.html',
				'/js/common/directives/individual-forms/multiple-choice-directive.html',
				'/js/common/directives/individual-forms/number-directive.html',
				'/js/common/directives/individual-forms/section-break-directive.html',
				'/js/common/directives/individual-forms/text-directive.html',
				'/js/completed-forms/templates/completed-forms-list.view.html',
				'/js/completed-forms/templates/completed-forms.view.html',
				'/js/completed-forms/templates/completed-individual-form.view.html',
				'/js/form-builder/templates/checkboxes.template.html',
				'/js/form-builder/templates/dropdown.template.html',
				'/js/form-builder/templates/form-editor.template.html',
				'/js/form-builder/templates/line-text.template.html',
				'/js/form-builder/templates/multiple-choice.template.html',
				'/js/form-builder/templates/paragraph-text.template.html',
				'/js/form-templates/form-templates.view.html',
				'/js/login/login.html',
				'/js/sync/sync.view.html',
				'/js/sync/syncDown-success.html',
				'/js/sync/syncUp-success.html',
				'/js/sync/clearDb-success.html'

			]);
		})
	);
});

this.addEventListener('fetch', function(event) {
	event.respondWith(
		// caches.open('v1').then(function(cache){
		// 	console.log('request', event.request)
		// 	return cache.match(event.request)
		// })
		// .then(function(match) {
		// 	console.log('match!', match)
		// 	return match;
		// })
		caches.match(event.request)
		// .then(function(match) {
		// 	console.log('found a match', event.request,match)
		// })
		// .catch(function(err) {
		// 	console.log('couldnt find it in the cache', err)
		// })
	);
});