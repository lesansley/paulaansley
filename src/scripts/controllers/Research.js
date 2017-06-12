import { ResearchModel } from './../models/index';

export default class Research {
	constructor () {
		this.model = new ResearchModel();
	}

	init () {
		console.log(this.model.read());
	}

	renderView () {
		
	}
}