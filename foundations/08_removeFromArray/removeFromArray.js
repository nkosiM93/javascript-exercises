const removeFromArray = function(array, ...elementsToRemove) {
    if (array.length <= 0 || elementsToRemove.length <= 0) {
        return array;
    }
    return array
    .filter(element => !(elementsToRemove.includes(element)));
};
// Do not edit below this line
module.exports = removeFromArray;
