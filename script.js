function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var resultElement = document.getElementById("result");
    
    if (!isNaN(inputTemp)) {
        var fahrenheit = (inputTemp * 9/5) + 32;
        var kelvin = inputTemp + 273.15;

        resultElement.innerHTML = "Hasil Konversi:<br>";
        resultElement.innerHTML += inputTemp + " °C = " + fahrenheit.toFixed(2) + " °F<br>";
        resultElement.innerHTML += inputTemp + " °C = " + kelvin.toFixed(2) + " K";
    } else {
        resultElement.innerHTML = "Masukkan suhu yang valid.";
    }
}