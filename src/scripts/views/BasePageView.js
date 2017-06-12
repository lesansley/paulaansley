import { _basepage } from './../templates/index';

export default class BasePageView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
	}

	render () {
		document.querySelector('#app').appendChild(_basepage(this.id));
	}
}