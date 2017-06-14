import { HomeView } from './../views/index';
import { HomeModel } from './../models/index';

export default class Home {
	constructor (app) {
		this.app = app;
		this.id = 'home';
		this.view = new HomeView(this);
		this.model = new HomeModel();
	}

	init () {
		window.history.replaceState(null, 'Paula Ansley Resume', `${this.app.root}/${this.id}`);
	}

	controller () {
		this.view.remove();
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}