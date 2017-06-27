import { _home } from './../templates/index';

export default class HomeView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
		this.model = this.controller.model;
	}

	render () {
		let home = _home(this.id);
		home.querySelector('.quote').innerHTML = this.controller.model.read(this.id)[0].quote;
		home.querySelector('.author').innerHTML = this.controller.model.read(this.id)[0].author;
		document.querySelector('.page').appendChild(home);
	}

	quotes () {
		
	}

	remove () {
		let page = document.querySelector('.page');
		while (page.childElementCount > 0) {
			page.removeChild(page.firstElementChild);
		}
	}
}