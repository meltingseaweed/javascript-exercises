const convertToCelsius = function(faren) {
  let celsius = (faren - 32) * 5 / 9;
  let rounded = Math.round(celsius * 10) /10;
  return rounded;
};

const convertToFahrenheit = function(celsius) {
  let farenheit = (celsius * 9 / 5) + 32;
  let rounded = Math.round(farenheit * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
