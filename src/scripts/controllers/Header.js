import { HeaderView } from './../views/index';
import { Nav } from './index';

export default class Header {
	constructor () {
		this.id = 'header';
		this.view = new HeaderView(this);
		this.nav = new Nav();
	}

	init () {
		this.renderView();
		this.nav.init();
	}

	renderView () {
		this.view.render();
	}
}