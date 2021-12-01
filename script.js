// Calculations
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

let operationArray = [];
let displayValue = '';

const calcResults = () => {
    a = Number(operationArray[0]);
    oper = operationArray[1];
    b = Number(operationArray[2]);
    switch (oper) {
        case '*': 
            return multiply(a,b);
    
        case '/':
            return divide(a,b);
            
        case '+':
            return add(a,b);
        
        case '-':
            return subtract(a,b);
        
    }
}

//Display Reset
const displayReset = () => { 
    const display = document.getElementById('display');
    display.removeChild;
    display.innerHTML = displayValue;
    let index = operationArray.indexOf('');
    index !== -1 ? operationArray.splice(index,1): false;
}
//Calculate Button
function arrayCutOffCalc() {
    operationArray.length === 3 ? (
        displayValue = calcResults(),
        operationArray.splice(0, 3, displayValue),
        displayReset(),
        displayValue = ''
    ) : false;
    displayValue = '';
}
function buttonCalcInput() {
    operationArray.length === 2 && displayValue !== '' ? (
    operationArray.push(displayValue),
    arrayCutOffCalc()
    ) : false;
}
buttonCalc = document.getElementById('buttonCalc');
buttonCalc.addEventListener('click', buttonCalcInput);

//Operator Button
const clearDisplay = () => displayValue !== '' && operationArray.length === 1 ? operationArray.splice(0,1): false;

function arrayCutOffOp() { 
    operationArray.length === 4 ? (
        displayValue = calcResults(),
        operationArray.splice(0, 3, displayValue),
        displayReset(),
        displayValue = ''
    ) : false;
    displayValue = '';
}
function buttonOpInput() {
    if (displayValue === '') {
        let index = operationArray.length;
        let buttonValue = this.value
        switch (index) {
            case 0:
            return;

            case 1:
            operationArray.push(buttonValue);
            break;

            case 2:
            operationArray.splice(1,1,buttonValue);
            break;

            case 3: 
            operationArray.splice(2,1,buttonValue);
            break;
        }
    } else {
        clearDisplay();
        operationArray.push(displayValue);
        operationArray.push(this.value);
        arrayCutOffOp();
    }
}
buttonOp = document.querySelectorAll('#buttonOp');
for (i = 0; i < 4; i++) {
    buttonOp[i].addEventListener('click', buttonOpInput);
}

//Number Button
function buttonNumInput() {
    if (this.value === '.' && displayValue.indexOf(".") >= 0) {
        return '';
    } else if (this.value === '.' && displayValue.length === 0) {
        displayValue = '0';
    }
    displayValue += this.value;
    displayReset();
}
buttonNum = document.querySelectorAll("#buttonNum");
for (i = 0; i < 11; i++) {
    buttonNum[i].addEventListener('click', buttonNumInput);
}

//All Clear Button
function allClearInput() {
    operationArray = [];
    displayValue = '';
    displayReset();
}
allClear = document.getElementById('ac');
allClear.addEventListener('click', allClearInput)

//Clear Button
function clearButtonInput() {
    displayValue === '' ? (
        operationArray = [],
        displayReset() 
    ) : (
        displayValue = displayValue.slice(0,-1),
        displayReset()
    );
}
clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearButtonInput);

//Keyboard Presses
function keyInput(e) {
    switch (e.key) {
        case '-':
        case '+':
        case '*':
        case '/': 
            if (displayValue === '') {
                let index = operationArray.length;
                let buttonValue = e.key
                switch (index) 
                {
                    case 0:
                    return;
        
                    case 1:
                    operationArray.push(buttonValue);
                    break;
        
                    case 2:
                    operationArray.splice(1,1,buttonValue);
                    break;
        
                    case 3: 
                    operationArray.splice(2,1,buttonValue);
                    break;
                }
            } else {
                clearDisplay();
                operationArray.push(displayValue);
                operationArray.push(e.key);
                arrayCutOffOp();
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            displayValue += e.key;
            displayReset();
            break;
        case '.':
            if (e.key === "." && displayValue.indexOf(".") >= 0) {
                return '';
            } else if (e.key === '.' && displayValue.length === 0) {
                displayValue = '0';
            }
            displayValue += "."
            displayReset();
            break;
        case 'Enter':
            buttonCalcInput();
            document.querySelector('button.add').blur();
            document.querySelector('button.subtract').blur();
            document.querySelector('button.multiply').blur();
            document.querySelector('button.divide').blur();
            break;
        case 'Backspace':
            clearButtonInput();
            break;
        case 'Escape':
            allClearInput();
            break;
    }
}
document.body.addEventListener('keydown', keyInput);

function keyFocus(e) {
    switch (e.key) {
        case '-': 
            document.querySelector('button#buttonOp').blur();
            document.querySelector('button.subtract').focus();
            break;
        case '+':
            document.querySelector('button#buttonOp').blur();
            document.querySelector('button.add').focus();
            break;
        case '*':
            document.querySelector('button#buttonOp').blur();
            document.querySelector('button.multiply').focus();
            break;
        case '/':
            document.querySelector('button#buttonOp').blur();
            document.querySelector('button.divide').focus();
            break;
       case '1':
            document.querySelector('button.one').id ='buttonNumActive';
            break;
        case '2':
            document.querySelector('button.two').id ='buttonNumActive';
            break;
        case '3':
            document.querySelector('button.three').id ='buttonNumActive';
            break;
        case '4':
            document.querySelector('button.four').id ='buttonNumActive';
            break;
        case '5':
            document.querySelector('button.five').id ='buttonNumActive';
            break;
        case '6':
            document.querySelector('button.six').id ='buttonNumActive';
            break;
        case '7':
            document.querySelector('button.seven').id ='buttonNumActive';
            break;
        case '8':
            document.querySelector('button.eight').id ='buttonNumActive';
            break;
        case '9':
            document.querySelector('button.nine').id ='buttonNumActive';
            break;
        case '0':
            document.querySelector('button.zero').id ='buttonNumActive';
            break;
        case '.':
            document.querySelector('button.period').id ='buttonNumActive';
            break;
        case 'Enter':
            document.querySelector('button.equal').id ='buttonCalcActive';
            break;
        case 'Backspace':
            document.querySelector('button.clear').id ='clearActive';
            break;
        case 'Escape':
            document.querySelector('button.ac').id ='acActive';
            break;
    }        
}
document.body.addEventListener('keydown', keyFocus);

function keyUpFocus(e) {
    switch (e.key) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
        case '.':
            document.querySelector('button#buttonNumActive').id = 'buttonNum'
            break;
        case 'Enter':
            document.querySelector('button#buttonCalcActive').id ='buttonCalc';
            break;
        case 'Backspace':
            document.querySelector('button#buttonOp').blur();
            document.querySelector('button#clearActive').id ='clear'
            break;
        case 'Escape':
            document.querySelector('button#buttonOp').blur();
            document.querySelector('button#acActive').id ='ac'
            break;
    }
}
document.body.addEventListener('keyup', keyUpFocus);