import Handlebars from 'handlebars';

import { EducationView } from './../views/index';
import { education } from './../data/index';

export default class Education {
	constructor (model) {
		this.model = model;
		this.view = new EducationView();
		this.id = 'education';
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, education);
	}

	controller () {
		let source = document.getElementById("some-template").innerHTML; 
		let template = Handlebars.compile(source);
		if(!this.model.exists(this.id)) this.init();
		console.log(this.model.read(this.id));
	}

	renderView () {

	}
}