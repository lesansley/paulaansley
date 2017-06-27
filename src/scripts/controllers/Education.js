import { EducationView } from './../views/index';
import { education } from './../data/index';

export default class Education {
	constructor (app) {
		this.app = app;
		this.model = this.app.model;
		this.id = 'education';
		this.view = new EducationView();
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, education);
	}

	controller () {
		if(!this.model.exists(this.id)) this.init();
		console.log(this.model.read(this.id));
	}

	renderView () {

	}
}