import { WorkView } from './../views/index';
import { work } from './../data/index';

export default class Work {
	constructor (app) {
		this.app = app;
		this.model = this.app.model;
		this.id = 'work';
		this.view = new WorkView(this);
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, { work });
	}

	controller () {
		if(!this.model.exists(this.id)) this.init();
		console.log(this.model.read(this.id));
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}