import { Header, Footer } from './index';
import { BasePageView } from './../views/index';


export default class BasePage {
	constructor (app) {
		this.app = app;
		this.id = `page${Math.round(Math.random() * 1000000000)}`;
		this.view = new BasePageView(this);
		this.header = new Header(this.app);
		this.footer = new Footer(this.app);
	}

	controller () {
		this.renderView();
		this.header.controller();
		this.footer.controller();
	}

	renderView () {
		this.view.render();
	}
}