import { JournalsView } from './../views/index';

export default class Journals {
	constructor (page) {
		this.page = page;
		this.model = this.page.model;
		this.id = 'journals';
		this.view = new JournalsView(this, this.model);
	}

	controller (data) {
		this.model.update(this.id, data);
		console.log(this.model.read(this.id));
		this.renderView();
	}

	renderView () {
		this.view.render();
	}
}