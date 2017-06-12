import { Header, Footer } from './index';
import { BasePageView } from './../views/index';


export default class BasePage {
	constructor () {
		this.id = `page${Math.round(Math.random() * 1000000000)}`;
		this.view = new BasePageView(this);
		this.header = new Header();
		this.footer = new Footer();
	}

	init () {
		this.renderView();
		this.header.init();
		this.footer.init();
	}

	renderView () {
		this.view.render();
	}
}