const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    }
    let arr = [0,1];
    for (i = 2; i <= a; i++) {
        arr.push((arr[i-1] + arr[i-2]))
        console.log(arr);
    }
    return arr[a];
};

// Do not edit below this line
module.exports = fibonacci;
