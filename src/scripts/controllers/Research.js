import { Journals, Reviews} from './index';
import { ResearchView } from './../views/index';
import { searchTerm } from './../data/index';

import { getPubMedReferences } from './../utils/helpers';

export default class Research {
	constructor (app) {
		this.app = app;
		this.id = 'research';
		this.model = this.app.model;
		this.view = new ResearchView(this);
		this.journals = new Journals(this);
		this.reviews = new Reviews(this);
    }

	init () {
		let reviews = [],
			journals = [];

		return new Promise( function(resolve, reject) {
			getPubMedReferences(searchTerm)
				.then( function (res) {
					if(res.uids) {
						delete res.uids;
						filterRefList.bind(this)(res);
						this.model.create(this.id);
						this.model.update(this.id, { status: 'OK', journals, reviews } );
					} else {
						err();
					}
					resolve();
				}.bind(this))
				.catch( function() {
					err();
					reject();
				}.bind(this));
		}.bind(this));
		
		function filterRefList (data) {
	        for(let ref in data) {
	            if(data[ref].pubtype[1] === 'Review') {
	                reviews.push(data[ref]);
	            } else if(data[ref].pubtype[0] === 'Journal Article') {
	                journals.push(data[ref]);
	            }
	        }
	    }

	    function err() {
	    	this.model.create(this.id);
			this.model.update(this.id, { status: 'Error' } );
	    }
	}

	controller () {
		if(!this.model.exists(this.id)) {
			this.init().then( function() {
				this.renderView();
			}.bind(this))
			.catch( err => console.error(err) );
		} else {
			this.renderView();

		}
	}

	renderView () {
		this.view.remove();
		this.view.render(this);
		this.journals.controller(this.model.read(this.id).journals);
		this.reviews.controller(this.model.read(this.id).reviews);
	}
}