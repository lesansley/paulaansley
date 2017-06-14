import { WorkView } from './../views/index';
import { WorkModel } from './../models/index';
import { extendObject } from './../utils/helpers';

export default class Work {
	constructor () {
		this.view = new WorkView();
		this.id = 'Work';
		extendObject(this, new WorkModel());
	}

	init () {
		
	}

	controller () {
		
	}

	renderView () {

	}
}