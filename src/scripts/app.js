import 'babel-polyfill';
import 'native-promise-only';
import '@kapouer/template';

import Router from './Config/Router';
import * as Page from './Controllers/index';

export default class App {
	constructor () {
		this.router = new Router(this);
	}

	init () {
		this.router.pause(true);
		this.router.navigate('/home');
		this.router.pause(false);
		this.basePage = new Page.BasePage();
		this.basePage.init();
	}

	pageDisplay (page) {
		this.page = new Page[page](this);
	}

	pageError () {

	}
}


const app = new App();

window.addEventListener('load', () => app.init());