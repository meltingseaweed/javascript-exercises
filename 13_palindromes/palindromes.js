const palindromes = function (str) {
    // Filter out spaces and non-alphabet characters
const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789"

    const tidyString = str
    .toLowerCase()
    .split("")
    .filter((character) => alphanumerical.includes(character))
    .join("");

    const reverseString = tidyString.split("").reverse().join("");

    return tidyString === reverseString;

};

// Do not edit below this line
module.exports = palindromes;
