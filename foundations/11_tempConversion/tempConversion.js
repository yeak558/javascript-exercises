const convertToCelsius = function(fahr) {
  let celcius = (fahr - 32) * (5/9);
  if (Number.isInteger(celcius)) return celcius;
  else return parseFloat( celcius.toFixed(1) );
};

const convertToFahrenheit = function(celcius) {
  let fahr = celcius * (9/5) + 32;
  if (Number.isInteger(fahr)) return fahr;
  else return parseFloat( fahr.toFixed(1) );
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
