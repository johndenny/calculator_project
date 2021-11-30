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

function clearDisplay() { //removes extra '' left by empty displayValue after operator button
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

function arrayCutOffOp() { // calc is triggered
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
    if (operationArray.length <= 3 && displayValue === '') {
        return;
    }
    operationArray.push(displayValue); 
    arrayCutOffCalc();
}
buttonCalc.addEventListener('click', buttonCalcInput);

buttonOp = document.querySelectorAll('#buttonOp');
function buttonOpInput() {
    let index = operationArray.length;
    if (index === 0 && displayValue === '') {
        return;
    } else if (index === 2 && displayValue === '') {
        operationArray.splice(1,1,this.value);
    } else if (index === 3 && displayValue === '') {
        operationArray.splice(2,1,this.value);
    } else {
    clearDisplay();
    operationArray.push(displayValue); 
    operationArray.push(this.value);
    arrayCutOffOp();
    }
}
for (i = 0; i < 4; i++) {
    buttonOp[i].addEventListener('click', buttonOpInput);
}
    
buttonNum = document.querySelectorAll("#buttonNum");
function buttonNumInput() {
    if (this.value === '.' && displayValue.indexOf(".") >= 0) {
        return '';
    } else if (this.value === '.' && displayValue.length === 0) {
        displayValue = '0';
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
    if (displayValue === '') {
        operationArray = [];
    }
    displayValue = displayValue.slice(0,-1);
    displayReset();
}
clearButton.addEventListener('click', clearButtonInput);

function numKey(e) {
    if (e.key === '-' || e.key === "+" || e.key === "*" || e.key === "/") {
        let index = operationArray.length;
        if (index === 0 && displayValue === '') {
            return;
        } else if (index === 2 && displayValue === '') {
            operationArray.splice(1,1,e.key);
        } else if (index === 3 && displayValue === '') {
            operationArray.splice(2,1,e.key);
        } else {
        clearDisplay();
        operationArray.push(displayValue); 
        operationArray.push(e.key);
        arrayCutOffOp();
        }
    } else if (e.code.slice(0, 5) === 'Digit' || e.code.length === 7 && e.code.slice(0,6) === 'Numpad') {
        displayValue += e.code.slice(-1);
        displayReset(); 
    } else if (e.code === "Backspace") {
        clearButtonInput();
    } else if (e.key === "Enter") {
        buttonCalcInput();
        document.querySelector('button.add').blur();
        document.querySelector('button.subtract').blur();
        document.querySelector('button.multiply').blur();
        document.querySelector('button.divide').blur();
    } else if (e.key === '.') {
        if (e.key === "." && displayValue.indexOf(".") >= 0) {
            return '';
        } else if (e.key === '.' && displayValue.length === 0) {
            displayValue = '0';
        }
        displayValue += "."
        displayReset(); 
    } else if (e.code === 'Escape') {
        allClearInput();
    }
}
document.body.addEventListener('keydown', numKey);

function OpKeyPressed(e) {
    if (e.key === '-') {
        document.querySelector('button#buttonOp').blur();
        document.querySelector('button.subtract').focus();
    } else if (e.key === '+') {
        document.querySelector('button#buttonOp').blur();
        document.querySelector('button.add').focus();
    } else if (e.key === '*') {
        document.querySelector('button#buttonOp').blur();
        document.querySelector('button.multiply').focus();
    } else if (e.key === '/') {
        document.querySelector('button#buttonOp').blur();
        document.querySelector('button.divide').focus();
    } 
}

document.body.addEventListener('keydown', OpKeyPressed);