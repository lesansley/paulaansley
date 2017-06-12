import Navigo from 'Navigo';

export default class Router {
	constructor (app) {
		this.app = app;
		this.router = new Navigo(this.app.root);

		this.router.on({
			'/home': function () {
				this.app.page.home.renderView();
			}.bind(this),
			'/about': function () {
				this.app.page('About');
			}.bind(this),
			'/contact': function () {
				this.app.page('Contact');
			}.bind(this),
			'/education': function () {
				this.app.page('Education');
			}.bind(this),
			'/research': function () {
				this.app.page('Research');
			}.bind(this),
			'/work': function () {
				this.app.page('Work');
			}.bind(this),
		})
		.resolve();

		this.router.notFound(function (query) {
			return this.app.pageError(query);
		}.bind(this));
	}
}