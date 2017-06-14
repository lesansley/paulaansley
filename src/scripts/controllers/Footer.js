import { FooterView } from './../views/index';

export default class Footer {
	constructor () {
		this.id = 'footer';
		this.view = new FooterView(this);
	}

	controller () {
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}