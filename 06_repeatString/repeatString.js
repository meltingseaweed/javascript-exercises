const repeatString = function(str, num) {
    let output = "";
    if (num < 0) {
        return "ERROR";
    }
    for (i=0; i < num; i++) {
        output += str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
