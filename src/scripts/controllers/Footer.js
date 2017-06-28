import { FooterView } from './../views/index';
import { contact } from './../data/index';

export default class Footer {
	constructor (app) {
		this.app = app;
		this.model = this.app.model;
		this.id = 'footer';
		this.view = new FooterView(this);
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, { contact });
	}

	controller () {
		if(!this.model.exists(this.id)) this.init();
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}