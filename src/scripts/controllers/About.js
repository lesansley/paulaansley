import { AboutView } from './../views/index';
import { AboutModel } from './../models/index';
import { extendObject } from './../utils/helpers';

export default class About {
	constructor () {
		this.view = new AboutView();
		this.id = 'about';
		extendObject(this, new AboutModel());
	}

	init () {
		
	}

	controller () {

	}

	renderView () {

	}
}