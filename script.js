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
    display.removeChild;
    display.innerHTML = displayValue;
    let index = operationArray.indexOf('');
    if (index !== -1) {
        operationArray.splice(index,1);
    }
}

function clearDisplay() { //removes extra '' left by empty displayValue after calc
    if (displayValue !== '' && operationArray.length === 1) {
        operationArray.splice(0,1);
    }
}

let operationArray = [];
let displayValue = '';

function calcResults() {
    a = Number(operationArray[0]);
    oper = operationArray[1];
    b = Number(operationArray[2]);
    if (oper === '*') {
        return multiply(a,b);
    } else if (oper === '/') {
        return divide(a,b);
    } else if (oper === '+') {
        return add(a,b);
    } else if (oper === '-') {
        return subtract(a,b);
    }
}

function arrayCutOffOp() { //max length until calc is trigger
    if (operationArray.length === 4) {
        displayValue = calcResults();
        operationArray.splice(0, 3, displayValue);
        displayReset();
        displayValue = '';
    }
    displayValue = '';
}

function arrayCutOffCalc() {
    if (operationArray.length === 3) {
        displayValue = calcResults();
        operationArray.splice(0, 3, displayValue);
        displayReset();
        displayValue = '';
    }
    displayValue = '';
}

buttonCalc = document.getElementById('buttonCalc');
function buttonCalcInput() {
    operationArray.push(displayValue); 
    arrayCutOffCalc();
}
buttonCalc.addEventListener('click', buttonCalcInput);

buttonOp = document.querySelectorAll('#buttonOp');
function buttonOpInput() {
    clearDisplay();
    operationArray.push(displayValue); 
    operationArray.push(this.value);
    arrayCutOffOp();
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
    operationArray = [];
    displayValue = '';
    displayReset();
}
allClear.addEventListener('click', allClearInput)

clearButton = document.getElementById('clear');
function clearButtonInput() {
    displayValue = displayValue.slice(0,-1);
    displayReset();
}
clearButton.addEventListener('click', clearButtonInput);

function numKey(e) {
    if (e.key === '-' || e.key === "+" || e.key === "*" || e.key === "/") {
        clearDisplay();
        operationArray.push(displayValue); 
        operationArray.push(e.key);
        arrayCutOffOp();
    } else if (e.code.slice(0, 5) === 'Digit' || e.code.length === 7 && e.code.slice(0,6) === 'Numpad') {
        displayValue += e.code.slice(-1);
        displayReset(); 
    } else if (e.code === "Backspace") {
        clearButtonInput();
    } else if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "NumpadEqual") {
        buttonCalcInput();
    } else if (e.code === "Period" || e.code === "NumpadDecimal") {
        if (e.code === "Period" && displayValue.indexOf(".") >= 0 || e.code === 'NumpadDecimal' && displayValue.indexOf(".") >= 0) {
            return '';
        }
        displayValue += "."
        displayReset(); 
    } else if (e.code === 'Escape') {
        allClearInput();
    }
}
document.addEventListener('keydown', numKey);45