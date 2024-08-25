
function TemperatureConverter() {
  const celsius = parseFloat(document.getElementById("celsius").value);

  // Converting celsius to fahrenheit tingi.
  const fahrenheit = (celsius * 9/5) + 32;

  const KelvinScale = -273.15;
  const kelvin = celsius - KelvinScale;

  document.getElementById("fahrenheit").innerText = `Lämpötila Fahrenheit-asteina: ${fahrenheit.toFixed(2)} °F`;
  document.getElementById("kelvin").innerText = `Lämpötila Kelvineinä: ${kelvin.toFixed(2)} K`;
}

// This is the way how to do it by pressing enter.
document.getElementById("celsius").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      TemperatureConverter();
  }
});
