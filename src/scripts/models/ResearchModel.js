import request from 'superagent';

const term = 'robson-ansley[Author] OR (robson pj[Author] AND noakes td[Author]) OR (robson pj[Author] AND myburgh kh[Author]) OR (robson pj[Author] AND gleeson m[Author])';

export default class ResearchModel {
	constructor () {
		this.baseUrl = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/';
		this.search = 'esearch.fcgi';
		this.summary = 'esummary.fcgi';
		this.db = 'pubmed';
		this.retmode = 'json';
		this.retmax = '50';
		this.rettype = 'abstract';
		this.term = encodeURI(term).replace(/%20/g, '+');
        this.accept = 'application/json';
        this.type = 'json';
        this.get()
        	.then( function(res) {
	        	this.id = res.toString();
	        	this.set()
	        		.then( function(res) {
	        			this.references = res;
	        		}.bind(this));
        	}.bind(this))
        	.catch ( (err) => {
        		console.error(err);
        	});
    }

    read () {
        return this.references;
    }

    get () {
    	let query = `${this.baseUrl + this.search}?db=${this.db}&term=${this.term}&retmode=${this.retmode}&retmax=${this.retmax}`;
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
    	let query = `${this.baseUrl + this.summary}?db=${this.db}&retmode=${this.retmode}&rettype=${this.rettype}&id=${this.id}`;
    	return new Promise( (resolve, reject) => {
    		this.pubMedAPI(query)
    			.then( (res) => {
		    		resolve(res.result);
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
                    resolve(res.body);
                })
                .catch( (err) => {
                    reject(err);
                });
        });
    }
}