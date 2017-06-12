import { _header } from './../templates/index';

export default class HeaderView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
	}

	render () {
		document.querySelector('header').appendChild(_header(this.id));
	}
}