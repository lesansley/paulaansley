import Navigo from 'Navigo';

export default class Router {
	constructor (app) {
		this.app = app;
		this.router = new Navigo(this.app.root);
		this.router.hooks({
			before: (done) => { console.log('before'); done(); },
			after: () => { console.log('after'); }
		});
		this.router
			.on('/about', function () {
				console.log('about');
			}.bind(this))
			.on('/contact', function () {
				console.log('contact');
			}.bind(this))
			.on('/education', function () {
				console.log('education');
			}.bind(this))
			.on('/home', function () {
				console.log('home');
			}.bind(this))
			.on('/research', function () {
				console.log('research');
			}.bind(this))
			.on('/work', function () {
				console.log('work');
			}.bind(this))
			.resolve();

		this.router.notFound(function (query) {
			return this.app.pageError(query);
		}.bind(this));
	}
}