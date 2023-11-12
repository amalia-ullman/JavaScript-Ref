const fahrenheitInputBox = document.getElementById("fahrenheitInput");
const celsiusInputBox = document.getElementById("celsiusInput");


function celsius(){
    fahrenheit = fahrenheitInputBox.value;
    celsiusInputBox.value = ((fahrenheit - 32) * (5/9)).toFixed(4)
}
function fahrenheit(){
    celsius = celsiusInputBox.value;
    fahrenheitInputBox.value = ((celsius * (9/5)) + 32).toFixed(4)
}

fahrenheitInputBox.addEventListener("input", celsius);
celsiusInputBox.addEventListener("input", fahrenheit);