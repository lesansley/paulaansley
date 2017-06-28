import Handlebars from 'handlebars';

import { _publications } from './../templates/index';
import { _research } from './../templates/index';

export default class ResearchView {
	constructor (controller) {
		this.controller = controller;
		this.model = this.controller.model;
		this.id = this.controller.id;
	}

	render () {
		document.querySelector('.page').appendChild(_research(this.id));
	}

	publications (type) {
		let fragment = _publications(type),
			source = fragment.querySelector('script').innerHTML,
			template = Handlebars.compile(source),
			dom = template(this.model.read(this.id));
		document.querySelector(`.${type}`).innerHTML = dom;
	}
}