'use strict';

function collect_all_even(collection) {
    var newArray = [];

    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 === 0) {
            newArray.push(collection[i]);
        }
    }

    return newArray;
}

module.exports = collect_all_even;
