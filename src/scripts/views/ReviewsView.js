import Handlebars from 'handlebars';

import { _reviews } from './../templates/index';

export default class ReviewsView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
		this.model = this.controller.model;
	}

	render () {
		let fragment = _reviews(this.id),
			source = fragment.querySelector('#handlebars').innerHTML,
			template = Handlebars.compile(source),
			dom = template(this.model.read(this.id));
		document.querySelector('.reviews').innerHTML = dom;
	}
}