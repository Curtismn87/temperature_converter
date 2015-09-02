// Set this variable to a starting Fahrenheit temperature...
var fahrenheit = 32;

// Enter conversion code below...
var fahrenheitToCelsius = ( fahrenheit - 32) / 1.8;
var fahrenheitToKelvin = (fahrenheit + 459.67) / 1.8;
var fahrenheitTemps = [fahrenheit, fahrenheitToCelsius, fahrenheitToKelvin];

// Enter console.log statements below...
console.log( "Fahrenheit: " + fahrenheit );
console.log( "Celsius: " + fahrenheitToCelsius  );
console.log( "Kelvin: " + fahrenheitToKelvin );
console.log(fahrenheitTemps)

// Repeat the above for Celsius and Kelvin...
var celsius = 0;

// Enter conversion code below...
var celsiusToFahrenheit = celsius * 1.8 + 32;
var celsiusToKelvin = celsius + 273.15;
var celsiusTemps = [celsius, celsiusToFahrenheit, celsiusToKelvin]

// Enter console.log statements below...
console.log( "Celsius: " + celsius );
console.log( "Fahrenheit: " + celsiusToFahrenheit  );
console.log( "Kelvin: " + celsiusToKelvin );
console.log(celsiusTemps);

var kelvin = 273.15;

// Enter conversion code below...
var kelvinToCelsius = kelvin - 273.15;
var kelvinToFahrenheit = Math.round(kelvin * 1.8 - 459.67);
var kevlvinTemps = [kelvin, kelvinToCelsius, kelvinToFahrenheit];

// Enter console.log statements below...
console.log( "Kelvin: " + kelvin );
console.log( "Fahrenheit: " + kelvinToFahrenheit );
console.log( "Celsius: " + kelvinToCelsius  );
console.log(kevlvinTemps);
