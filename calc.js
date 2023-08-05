
let displayValue = "";


function appendToDisplay(value) {
    displayValue += value;
    // console.log(displayValue)
    document.getElementById("placeholder").innerHTML = displayValue;

}




function calculate() {

    const result = eval(displayValue);
    document.getElementById("placeholder").innerHTML = result;

    // console.log(result)

}

function clearDisplay() {
    displayValue = "";
    document.getElementById("placeholder").innerHTML = "";
}
