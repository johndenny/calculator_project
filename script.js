function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function displayReset() {
    const display = document.getElementById('display');
    const displayHistory = document.getElementById('displayHistory')
    display.removeChild;
    display.innerHTML = displayValue;
    displayHistory.innerHTML = operationHistory;
}
let operationArray = [];
let operator = '';
let operationArrayResults = []
let operationHistory = '';
let displayValue = '';

function calcResults() {

}

buttonCalc = document.getElementById('buttonCalc');
function buttonCalcInput() {
    operationHistory += displayValue;
    displayValue = '';
    displayReset();
}
buttonCalc.addEventListener('click', buttonCalcInput);

buttonOp = document.querySelectorAll('#buttonOp');
function buttonOpInput() {
    operationArray.push(displayValue);
    if (operator === '+') {
        num1 = operationArray[0];
        num2 = operationArray[1];
        results = add(num1,num2);
        operationArrayResults.push(results);
        operationArray = [];
    }
    operationHistory += `${displayValue} ${this.value} `;
    displayValue = '';
    operator = this.value;
    displayReset();
}
for (i = 0; i < 4; i++) {
    buttonOp[i].addEventListener('click', buttonOpInput);
}
    
buttonNum = document.querySelectorAll("#buttonNum");
function buttonNumInput() {
    if (this.value === '.' && displayValue.indexOf(".") > 0) {
        return '';
    }
    displayValue += this.value;
    displayReset();
}
for (i = 0; i < 11; i++) {
    buttonNum[i].addEventListener('click', buttonNumInput);
}

allClear = document.getElementById('ac');
function allClearInput() {
    operationHistory = '';
    displayValue = '';
    displayReset();
}
allClear.addEventListener('click', allClearInput)

clearButton = document.getElementById('clear');
function clearButtonInput() {
    displayValue = displayValue.slice(0,-1);
    displayReset();
}
clearButton.addEventListener('click', clearButtonInput)






