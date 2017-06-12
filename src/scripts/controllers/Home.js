export default class Home {
	constructor (app) {
		this.app = app;
		this.id = 'home';
	}

	init () {
		window.history.replaceState(null, 'Paula Ansley Resume', `${this.app.root}/${this.id}`);
	}

	renderView () {
		console.log('render home');
	}
}