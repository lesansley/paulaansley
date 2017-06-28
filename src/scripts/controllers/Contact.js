import { ContactView } from './../views/index';
import { contact } from './../data/index';

export default class Contact {
	constructor (app) {
		this.app = app;
		this.model = this.app.model;
		this.id = 'contact';
		this.view = new ContactView(this);
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, { contact });
	}

	controller () {
		if(!this.model.exists(this.id)) this.init();
		console.log(this.model.read(this.id));
		this.renderView ();
	}

	renderView () {
		this.view.render();
	}
}