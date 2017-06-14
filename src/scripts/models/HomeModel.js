const quotes = [
	{
		quote: 'Big bad wolf',
		author: 'Little Red Hood'
	}
];

export default class HomeModel {
	constructor  () {
		this.quotes = quotes;
	}

	read (idx = 0) {
		return this.quotes[idx];
	}
}