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

function clearDisplay() {
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

buttonCalc = document.getElementById('buttonCalc');
function buttonCalcInput() {
    operationArray.push(displayValue); 
    if (operationArray.length === 3) {
        displayValue = calcResults();
        operationArray.splice(0, 3, displayValue);
        displayReset();
        displayValue = '';
    }
    displayValue = '';
}
buttonCalc.addEventListener('click', buttonCalcInput);

buttonOp = document.querySelectorAll('#buttonOp');
function buttonOpInput() {
    clearDisplay();
    operationArray.push(displayValue); 
    operationArray.push(this.value);
    if (operationArray.length === 4) {
        displayValue = calcResults();
        operationArray.splice(0, 3, displayValue);
        displayReset();
        displayValue = '';
    }
    displayValue = '';
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
clearButton.addEventListener('click', clearButtonInput)






