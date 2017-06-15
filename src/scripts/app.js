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
		this.basePage = new Page.BasePage(this);
		this.model = new AppModel();
		extendObject(this, new Router(this));
		this.page = {
			about: new Page.About(this.model),
			contact: new Page.Contact(this.model),
			education: new Page.Education(this.model),
			home: new Page.Home(this.model),
			oops: new Page.Oops(this.model),
			research: new Page.Research(this.model),
			work: new Page.Work(this.model)
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