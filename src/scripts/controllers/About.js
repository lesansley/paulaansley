import { AboutView } from './../views/index';
import { about } from './../data/index';

export default class About {
	constructor (app) {
		this.app = app;
		this.model = this.app.model;
		this.view = new AboutView();
		this.id = 'about';
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, { about });
	}

	controller () {
		if(!this.model.exists(this.id)) this.init();
		console.log(this.model.read(this.id));
	}

	renderView () {

	}
}