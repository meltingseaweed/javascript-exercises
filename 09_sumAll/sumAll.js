const sumAll = function(a, b) {
    if ((a < 0) || (b < 0) || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else if (a > b) {
        [a, b] = [b, a];
    }
    let sum = a;
    for (i = a; i < b; i++) {
      //  console.log(i);
        sum += (i+1);
   //     console.log(`sum is ${sum}`);
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
