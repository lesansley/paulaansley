import { extendObject } from './../utils/helpers';

export default class AppModel {
	constructor () {

	}

    create (name) {
        if(!this[name]) this[name] = {};
    }

	read (name) {
        if(!this[name]) this.create(name);
        return this[name];
    }

    readAll () {
        return this;
    }
 
    update (name, dataObject) {
        if(!this[name]) this.create(name);
        extendObject(this[name], dataObject);
        return this[name];
    }

    delete (name) {
        if(this[name]) delete this[name];
    }

    deleteAll () {
        for(var page in this){
            delete this[page];
        }
    }

    exists (name) {
        return (this[name]) ? true : false;
    }
}