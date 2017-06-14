import { NavView } from './../views/index';

export default class Nav {
	constructor (app) {
		this.app = app;
		this.id = 'nav';
		this.view = new NavView(this);
	}

	init () {
		this.renderView();
	}

	controller () {
		
	}

	renderView () {
		this.view.render();
	}

	navigate (e) {
		e.preventDefault();
		this.app.router.navigate('/about');
	}
}