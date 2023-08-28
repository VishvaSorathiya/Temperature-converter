function convertTemperature() {
  const temperatureInput = document.getElementById('temperature').value;

  if (!isNaN(temperatureInput)) {
    const celsius = parseFloat(temperatureInput);
    document.getElementById('celsius').textContent = celsius.toFixed(2);

    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);

    const kelvin = celsius + 273.15;
    document.getElementById('kelvin').textContent = kelvin.toFixed(2);

    const rankine = (celsius + 273.15) * 9/5;
    document.getElementById('rankine').textContent = rankine.toFixed(2);

    const reaumur = celsius * 4/5;
    document.getElementById('reaumur').textContent = reaumur.toFixed(2);
  } else {
    clearConversions();
  }
}

function clearConversions() {
  const conversions = document.querySelectorAll('.conversion-group p');
  conversions.forEach(conversion => conversion.textContent = '');
}
