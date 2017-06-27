import Handlebars from 'handlebars';

import { _journals } from './../templates/index';

export default class JournalsView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
		this.model = this.controller.model;
	}

	
	render () {
		let fragment = _journals(this.id),
			source = fragment.querySelector('#handlebars').innerHTML,
			template = Handlebars.compile(source),
			dom = template(this.model.read(this.id));
		document.querySelector('.journals').innerHTML = dom;
	}
}

Handlebars.registerHelper('authorList', function(authors) {
	let list = authors[0].name;
	for(let i = 1; i < authors.length; i++) {
		list += `, ${authors[i].name}`;
	}
	return list;
});