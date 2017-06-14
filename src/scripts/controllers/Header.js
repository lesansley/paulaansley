import { HeaderView } from './../views/index';
import { Nav } from './index';

export default class Header {
	constructor (app) {
		this.app = app;
		this.id = 'header';
		this.view = new HeaderView(this);
		this.nav = new Nav(this.app);
	}

	controller () {
		this.renderView();
		this.nav.init();
	}

	renderView () {
		this.view.render();
	}
}