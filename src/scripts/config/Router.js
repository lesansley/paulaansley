import Navigo from 'Navigo';

export default class Router {
	constructor (app) {
		this.app = app;
		this.router = new Navigo(this.app.root);
		this.router
			.on({
				'/about': function () {
					console.log('about');
				}.bind(this),
				'/contact': function () {
					console.log('contact');
				}.bind(this),
				'/education': function () {
					console.log('education');
				}.bind(this),
				'/home': function () {
					console.log('home');
				}.bind(this),
				'/research': function () {
					console.log('research');
				}.bind(this),
				'/work': function () {
					console.log('work');
				}.bind(this),
				
			})
			.resolve();

		this.router.notFound(function (query) {
			return this.app.pageError(query);
		}.bind(this));
	}
}