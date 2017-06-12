import { _footer } from './../templates/index';

export default class FooterView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
	}

	render () {
		document.querySelector('footer').appendChild(_footer(this.id));
	}
}