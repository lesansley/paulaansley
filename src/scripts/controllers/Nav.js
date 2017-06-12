import { NavView } from './../views/index';

export default class Footer {
	constructor () {
		this.id = 'nav';
		this.view = new NavView(this);
	}

	init () {
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}