import { _research } from './../templates/index';

export default class ResearchView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
	}

	render () {
		document.querySelector('.page').appendChild(_research(this.id));
	}

	remove () {
		let page = document.querySelector('.page');
		while (page.childElementCount > 0) {
			page.removeChild(page.firstElementChild);
		}
	}
}