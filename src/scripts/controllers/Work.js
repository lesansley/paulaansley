import { WorkView } from './../views/index';
import { work } from './../data/index';

export default class Work {
	constructor (app) {
		this.app = app;
		this.model = this.app.model;
		this.view = new WorkView();
		this.id = 'work';
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, { work });
	}

	controller () {
		if(!this.model.exists(this.id)) this.init();
		console.log(this.model.read(this.id));
	}

	renderView () {
		this.view.remove();
		this.view.render();
	}
}