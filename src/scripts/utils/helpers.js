/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param  {Object} obj1 The object to be extended
 * @param  {Object} obj2 
 * @return {Object}      The object that has been extended
 * http://jsfiddle.net/jlowery2663/z8at6knn/4/
 */
export default function extendObject(obj1, obj2) {
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