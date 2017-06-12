import { _nav } from './../templates/index';

import { onEvent } from './../utils/helpers';

export default class NavView {
	constructor (controller) {
		this.controller = controller;
		this.id = this.controller.id;
	}

	render () {
		document.querySelector('.nav').appendChild(_nav(this.id));
		onEvent.bind(this)('click', '.nav-item', this.navigate);

	}

	navigate (e) {
		this.controller.navigate(e);
	}
}