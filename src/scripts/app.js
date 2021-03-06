import 'babel-polyfill';
import 'native-promise-only';
import '@kapouer/template';

import Router from './config/Router';
import * as Page from './controllers/index';
import AppModel from './models/AppModel';
import { extendObject } from './utils/helpers';

export default class App {
	constructor () {
		this.rootUrl = getRoot();
		this.model = new AppModel();
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
		this.basePage.controller();
		this.router.updatePageLinks();
		window.history.replaceState(null, 'Paula Ansley Resume - HomePage', `${this.rootUrl}/home`);
		this.router.resolve();
	}

	pageError () {
		this.router.navigate(`${this.rootUrl}/oops`, true);
	}
}

function getRoot() {
	let fullUrl = window.location.href;
    let rootUrl = fullUrl.substring(0, fullUrl.lastIndexOf('/'));
	return rootUrl;
}

const app = new App();
window.addEventListener('load', () => app.init());