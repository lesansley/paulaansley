import { _nav } from './../templates/index';

export default class NavView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
	}

	render () {
		document.querySelector('.nav').appendChild(_nav(this.id));
	}
}