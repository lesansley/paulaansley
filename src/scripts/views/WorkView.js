import Handlebars from 'handlebars';
import { _work } from './../templates/index';

export default class WorkView {
	constructor (controller) {
		this.controller = controller;
		this.model = this.controller.model;
		this.id = this.controller.id;
	}

	render () {
		let fragment = _work(this.id),
			source = fragment.querySelector('script').innerHTML,
			template = Handlebars.compile(source),
			dom = template(this.model.read(this.id));
		document.querySelector('.page').innerHTML = dom;
	}
}