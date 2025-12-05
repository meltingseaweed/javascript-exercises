const leapYears = function(year) {

    // By making Boolean constants we can clean up the code
    // and have reduce the amount of characters.
    const divisibleByFour = (year % 4 === 0);
    const centuryYear = (year % 100 === 0);
    const divisibleByFourHundred = (year % 400 === 0);
    if (divisibleByFour && (!centuryYear || divisibleByFourHundred)) {
        return true;
} else {
    return false;
}
};
// Do not edit below this line
module.exports = leapYears;
