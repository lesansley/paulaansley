import { _home } from './../templates/index';

export default class HomeView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
		this.model = this.controller.model;
	}

	render () {
		let home = _home(this.id);
		home.querySelector('.quote').innerHTML = this.controller.model.read(this.id).home[0].quote;
		home.querySelector('.author').innerHTML = this.controller.model.read(this.id).home[0].author;
		document.querySelector('.page').appendChild(home);
	}

	quotes () {
		
	}
}