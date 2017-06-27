import Handlebars from 'handlebars';

import { ReviewsView } from './../views/index';

export default class Reviews {
	constructor (page) {
		this.page = page;
		this.model = this.page.model;
		this.view = new ReviewsView(this);
		this.id = 'reviews';
	}

	init () {
		this.model.create(this.id);
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