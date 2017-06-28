import { HomeView } from './../views/index';
import { home } from './../data/index';

export default class Home {
	constructor (app) {
		this.app = app;
		this.model = this.app.model;
		this.id = 'home';
		this.view = new HomeView(this);
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, home);
	}

	controller () {
		if(!this.model.exists(this.id)) this.init();
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}