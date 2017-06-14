import { ResearchView } from './../views/index';
import { ResearchModel } from './../models/index';
import { extendObject } from './../utils/helpers';

export default class Research {
	constructor () {
		this.view = new ResearchView();
		this.id = 'research';
		extendObject(this, new ResearchModel());
	}

	init () {
		console.log(this.model.read());
	}

	controller () {
		
	}

	renderView () {
		
	}
}