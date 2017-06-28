import Handlebars from 'handlebars';
import { _footer } from './../templates/index';

export default class FooterView {
	constructor (controller) {
		this.controller = controller;
		this.model = this.controller.model;
		this.id = this.controller.id;
	}

	render () {
		let fragment = _footer(this.id),
			source = fragment.querySelector('script').innerHTML,
			template = Handlebars.compile(source),
			dom = template(this.model.read(this.id));
		document.querySelector('footer').innerHTML = dom;
	}
}