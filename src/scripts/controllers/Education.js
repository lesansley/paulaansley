import { EducationView } from './../views/index';
import { EducationModel } from './../models/index';
import { extendObject } from './../utils/helpers';

export default class Education {
	constructor () {
		this.view = new EducationView();
		this.id = 'education';
		extendObject(this, new EducationModel());
	}

	init () {
		
	}

	controller () {
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}