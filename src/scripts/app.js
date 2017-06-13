import 'babel-polyfill';
import 'native-promise-only';
import '@kapouer/template';

import Router from './config/Router';
import * as Page from './controllers/index';
import { extendObject } from './utils/helpers';

export default class App {
	constructor () {
		this.root = getRoot();
		this.basePage = new Page.BasePage(this);
		extendObject(this, new Router(this));
		this.page = {
			about: new Page.About(this),
			contact: new Page.Contact(this),
			education: new Page.Education(this),
			home: new Page.Home(this),
			oops: new Page.Oops(this),
			research: new Page.Research(this),
			work: new Page.Work(this)
		};
	}

	init () {
		this.basePage.init();
		this.page.home.init();
		this.router.updatePageLinks();
	}

	pageError (err) {
		console.error('Router Error', err);
	}
}

function getRoot() {
	let fullUrl = window.location.href;
    let rootUrl = fullUrl.substring(0, fullUrl.lastIndexOf('/'));
	return rootUrl;
}

const app = new App();
window.addEventListener('load', () => app.init());