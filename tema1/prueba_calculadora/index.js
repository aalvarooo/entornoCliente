let currentValue = '';
let previousValue = '';
let operator = '';
let resultDisplayed = false;

function updateDisplay() {
    const currentDisplay = document.getElementById('current-value');
    const previousDisplay = document.getElementById('previous-value');
    currentDisplay.textContent = currentValue;
    previousDisplay.textContent = previousValue + (operator !== '' ? ' ' + operator : '');
}

function mostrarPantalla(numero) {
    currentValue += numero;
    updateDisplay();
}

function handleOperatorClick(value) {
    if (currentValue !== '') {
        previousValue = currentValue;
        currentValue = '';
        operator = value;
        updateDisplay();
    }
}

function calculateResult() {
    let result;
    const current = parseFloat(currentValue);
    const previous = parseFloat(previousValue);

    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case 'x':
            result = previous * current;
            break;
        case '/':
            result = previous / current;
            break;
        case '%':
            result = previous / 100;
            break;
        default:
            result = current;
            break;
    }

    currentValue = result.toString();
    previousValue = '';
    operator = '';
    resultDisplayed = true;

    updateDisplay();
}

function deleteLast() {
    if (resultDisplayed) {
        return;
    }

    currentValue = currentValue.slice(0, -1);
    updateDisplay();
}

function clearAll() {
    currentValue = '';
    previousValue = '';
    operator = '';
    resultDisplayed = false;
    updateDisplay();
}

// Asignación de eventos a botones
document.getElementById('clearButton').addEventListener('click', clearAll);
document.getElementById('backspaceButton').addEventListener('click', deleteLast);

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        mostrarPantalla(button.getAttribute('value'));
    });
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorClick(button.getAttribute('value'));
    });
});

document.getElementById('equalsButton').addEventListener('click', calculateResult);  // Changed to getElementById
