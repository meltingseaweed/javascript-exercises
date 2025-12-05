const removeFromArray = function(arr, ...arg) {
    for (i = 0; i < arg.length; i++) {
        while (arr.includes(arg[i])) {
            let index = arr.indexOf(arg[i]);
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Alternate
//const removeFromArray2 = function(array, ...arg) {
  //  return array.filter(item => !arg.includes(item));
//}

// Do not edit below this line
module.exports = removeFromArray;
