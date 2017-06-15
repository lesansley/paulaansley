import { HomeView } from './../views/index';
import { home } from './../data/index';

export default class Home {
	constructor (model) {
		this.model = model;
		this.id = 'home';
		this.view = new HomeView(this);
	}

	init () {
		this.model.create(this.id);
		this.model.update(this.id, home);
	}

	controller () {
		if(!this.model.exists(this.id)) this.init();
		this.view.remove();
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}