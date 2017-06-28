import Navigo from 'Navigo';

export default class Router {
	constructor (app) {
		this.app = app;
		this.router = new Navigo(this.app.rootUrl);
		this.router
			.hooks({
				before: (done) => { 
					let page = document.querySelector('.page');
					if(page) {
						while (page.childElementCount > 0) {
							page.removeChild(page.firstElementChild);
						}
					}
					done();
				},
				after: () => {}
			});
		this.router
			.on({
				'/about': function () {
					document.querySelector('title').innerHTML = 'Paula Ansley - about';
					this.app.page.about.controller();
				}.bind(this),
				'/contact': function () {
					document.querySelector('title').innerHTML = 'Paula Ansley - contact';
					this.app.page.contact.controller();
				}.bind(this),
				'/education': function () {
					document.querySelector('title').innerHTML = 'Paula Ansley - education';
					this.app.page.education.controller();
				}.bind(this),
				'/home': function () {
					document.querySelector('title').innerHTML = 'Paula Ansley - home';
					this.app.page.home.controller();
				}.bind(this),
				'/research': function () {
					document.querySelector('title').innerHTML = 'Paula Ansley - research';
					this.app.page.research.controller();
				}.bind(this),
				'/work': function () {
					document.querySelector('title').innerHTML = 'Paula Ansley - work';
					this.app.page.work.controller();
				}.bind(this),
			})
			.resolve();
	}
}