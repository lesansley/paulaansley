import Handlebars as  '.handlebars';
import request from 'superagent';

const term = 'robson-ansley[Author] OR (Robson PJ[Author] AND (Gleeson M[Author] OR Noakes TD[Author] OR Myburgh KH[Author] OR "interleukin 6"[All Fields]))';

export default class ResearchModel {
	constructor () {
		this.baseUrl = 'http://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
		this.search = 'esearch.fcgi';
		this.summary = 'summary.fcgi';
		this.db = 'pubmed';
		this.remod = 'json';
		this.retmax = '50';
		this.rettype = 'abstract';
		this.term = encodeURIComponent(term);
        this.accept = 'application/json';
        this.type = 'json';
        this.get()
        	.then( function(res) {
	        	this.id = res.toString();
	        	this.set()
	        		.then( function(res) {
	        			this.references = res;
	        		});
        	})
        	.catch ( (err) => {
        		console.error(err);
        	});
    }

    get () {
    	let query = `${this.baseUrl + this.search}?db=${this.db}&remod=${this.remod}&retmax=${this.retmax}&term=${this.term}`;
    	return new Promise( (resolve, reject) => {
    		this.pubMedAPI(query)
    			.then( (res) => {
		    		resolve(res.esearchresult.idlist);
		    	})
		    	.catch( (err) => {
		    		reject(err);
		    	});
    	});
    }

    set () {
    	let query = `${this.baseUrl + this.summary}?db=${this.db}&remod=${this.remod}&rettype=${this.rettype}&id=${this.id}`;
    	return new Promise( (resolve, reject) => {
    		this.pubMedAPI(query)
    			.then( (res) => {
		    		resolve(res);
		    	})
		    	.catch( (err) => {
		    		reject(err);
		    	});
    	});
    }

    pubMedAPI (query) {
        return new Promise( (resolve, reject) => {
            request
                .get(query)
                .then( (res) => {
                    resolve(res);
                })
                .catch( (err) => {
                    reject(err);
                });
        });
    }
}