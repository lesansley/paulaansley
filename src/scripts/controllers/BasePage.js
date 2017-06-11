import { BasePageView, Header, Footer} from './../Views/index';


export default class BasePage {
	constructor () {
		this.view = new BasePageView();
		this.header = new Header();
		this.footer = new Footer();
	}

	init () {

	}

	renderView () {

	}
}