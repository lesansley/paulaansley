import request from 'superagent';

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param  {Object} obj1 The object to be extended
 * @param  {Object} obj2 
 * @return {Object}      The object that has been extended
 * http://jsfiddle.net/jlowery2663/z8at6knn/4/
 */
export function extendObject(obj1, obj2) {
    let prop;

    for ( prop in obj2 ) {
        if ( obj2[prop] !== null && obj2[prop].constructor == Object ) {
            if ( obj1[prop] ) {
                extendObject( obj1[prop], obj2[prop] );
                continue;
            }
        } 
        obj1[prop] = obj2[prop];
    }
    return obj1;
}

export function removeElement (el) {
    el = covertToDOMNode(el);
    if(el === null) throw `Element.remove :: Element passed is null: ${el}`;
    
    if(el.length){
        for(let i = 0, len = el.length; i < len; i++) {
            remove(el[i]);
        }
    } else {
        remove(el);
    }

    function remove(element){
        let parentEl = null;
        try {
            parentEl = element.parentElement;

        } catch (err) {
            console.log('Error occurred removing element name from DOM: ', err);
            return;
        }
        parentEl.removeChild(element);
    }
}

export function removeClass (el, cls) {
    el = covertToDOMNode(el);
    if(el === null) throw `Element.removeClass :: Element passed is null: ${el}`;
    
    if(el.length){
        for(let i = 0, len = el.length; i < len; i++) {
            remove(el[i]);
        }
    } else {
        remove(el);
    }


    function remove(element) {
        let clsArray,
            idx;
        if(!cls) return element.className = '';
        try {
            clsArray = element.className.split(' ');
        } catch (err) {
            console.log('Error occurred removing class name from element:', err);
            return;
        }
        idx = clsArray.indexOf(cls);
        if (idx > -1) {
            clsArray.splice(idx, 1),
            element.className = clsArray.toString().replace(/,/g, ' ');
        }
    }
}

export function addClass (el, cls) {
    el = covertToDOMNode(el);
    if(el === null) throw `Element.addClass :: passed is null: ${el}`;
    
    if(el.length){
        for(let i = 0, len = el.length; i < len; i++) {
            add(el[i]);
        }
    } else {
        add(el);
    }

    
    function add(element) {
        if(!hasClass(element, cls)) {
            let classes = element.className || '';
            classes += ' ' + cls;
            element.className = classes.trim();
        }
    }
}

export function hasClass (el, cls) {
    el = covertToDOMNode(el);
    if(el === null) throw `Element.hasClass :: Element passed is null: ${el}`;
    if(el.length) el = el[0];
    
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

export function covertToDOMNode (el) {
    if(!el) return null;
    if(typeof el === 'string') {
        return document.querySelectorAll(el).length === 0 ? null : document.querySelectorAll(el);
    } else if(typeof el === 'object' && el.length) {
        let elementArray = [];
        for(let element in el) {
            if(!isNaN(parseInt(element)) && isElement(el[element])) elementArray.push(el[element]);
        }
        return elementArray.length > 0 ? elementArray : null;
    } else if(typeof el === 'object') {
        return isElement(el) ? el : null;
    } else {
        return null;
    }

    function isElement(elementItem) {
        return elementItem && typeof elementItem === 'object' && typeof elementItem.nodeType === 'number' && typeof elementItem.nodeName==='string';
    }
}

/**
 * Add event to an element
 * @param  {String || Array}        ev   e.g. 'click' || ['click', 'keyup']
 * @param  {String || HtmlElement}  el   e.g. '.button'
 * @param  {Function}               func function attached to the event
 */
export function onEvent (ev, el, func) {
    let events = [];
    if(Array.isArray(ev)) {
        ev.map( item => {
            events.push(item);
        });
    } else if(typeof ev === 'string') {
        events.push(ev);
    } else {
        throw `Element.onEvent :: Event passed is incorrect format: ${ev}`;
    }

    el = covertToDOMNode(el);
    if(el === null) throw `Element.onEvent :: Element passed is null: ${el}`;
    
    events.forEach( (event) => {
        if(el.length) {
            for(let i = 0, len = el.length; i < len; i++) {
                add.bind(this)(el[i], event);
            }
        } else {
            add.bind(this)(el, event);
        }
    });

    function add(element, event) {
        element.addEventListener(event, function(e) {
            func.bind(this)(e);
        }.bind(this), false);
    }
}

/**
 * Traverses the DOM returning the container element specified by the nodeTag.
 * 
 * @param  {HtmlElement} el DOM element
 * @param  {String} tagName Name of the NodeTag
 * @return {HtmlElement} parentEl name:value mapping
 * 
 */
export function getParentByNodeName (node, tagName) {
    let parent = null;
    node = covertToDOMNode(node);
    if(node === null) throw `Element.onEvent :: Element passed is null: ${node}`;
    if(node.length) node = node[0];
    tagName = tagName.toUpperCase();
    do {
        if(node.parentNode === null) {
            return null;
        }
        parent = node.parentNode;
        if(parent.nodeName === tagName) {
            break;
        }
        node = parent;
    }
    while(parent !== 'HMTL');
    return parent;
}

export function getPubMedReferences (term = '') {
    let config = {
            baseUrl: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/',
            search: 'esearch.fcgi',
            summary: 'esummary.fcgi',
            db: 'pubmed',
            retmode: 'json',
            retmax: '50',
            rettype: 'abstract',
            term: encodeURI(term).replace(/%20/g, '+'),
            accept: 'application/json',
            type: 'json'
        };

    return new Promise( (resolve, reject) => {
        getIdList.bind(this)()
            .then( function(res) {
                getRefList.bind(this)(res.toString())
                    .then( function(res) {
                        resolve(res);
                    }.bind(this));
            }.bind(this))
            .catch ( (err) => {
                reject(`{ error: ${err} }`);
            });
    });

    function getIdList () {
        let query = `${config.baseUrl + config.search}?db=${config.db}&term=${config.term}&retmode=${config.retmode}&retmax=${config.retmax}`;
        return new Promise( (resolve, reject) => {
            pubMedAPI(query)
                .then( (res) => {
                    resolve(res.esearchresult.idlist);
                })
                .catch( (err) => {
                    reject(err);
                });
        });
    }

    function getRefList (idx) {
        let query = `${config.baseUrl + config.summary}?db=${config.db}&retmode=${config.retmode}&rettype=${config.rettype}&id=${idx}`;
        return new Promise( (resolve, reject) => {
            pubMedAPI(query)
                .then( (res) => {
                    resolve(res.result);
                })
                .catch( (err) => {
                    reject(err);
                });
        });
    }

    function pubMedAPI (query) {
        return new Promise( (resolve, reject) => {
            request
                .get(query)
                .then( (res) => {
                    if(res.status === 200) resolve(res.body);
                    reject(res);
                })
                .catch( (err) => {
                    reject(err);
                });
        });
    }

}