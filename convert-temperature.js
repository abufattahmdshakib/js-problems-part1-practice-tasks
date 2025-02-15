// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.


function convertFahrenheitToCelsius(fahrenheit) {
    // return (fahrenheit - 32) * 5 / 9;
    return ((fahrenheit * 9.0 / 5.0) + 32.0);
  }

  const fahrenheitTemperature = 50;
const celsiusTemperature = convertFahrenheitToCelsius(fahrenheitTemperature);
console.log(celsiusTemperature , '°F');