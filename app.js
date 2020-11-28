// Variables
let displayValue = '';
let a;
let b;
let operator = '';

// Status paragraph
const statusText = document.getElementById('status');

// Arithmetic functions
const add = function(a, b) {
  return (Math.round((a + b) * 100000000) / 100000000);
}

const substruct = function(a, b) {
  return (Math.round((a - b) * 100000000) / 100000000);
}

const multiply = function(a, b) {
  return (Math.round((a * b) * 100000000) / 100000000);
}

const divide = function(a, b) {
  if (b === 0) {
    statusText.innerHTML = `You can't divide by 0. Push C-button to proceed.`;
    return '<~INFINITY~>';
  } else {
    return (Math.round(a / b * 100000000) / 100000000);
  }
}

// Choose operation
const operate = function(operator, a, b) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return substruct(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  } else return "Empty Operator";
}

// Store 1st operand + operator
let storeOperator = function(item) {
  if (operator === '') {

    // Case initial(first) operation - we don't have first operand
    if (displayValue !== '') {
      a = +displayValue;
    }
    operator = item.target.innerText;
    displayValue = '';
  

  // Chain evaluation
  } else {
    if (displayValue !== '') {
        b = +displayValue;
        a = displayValue = operate(operator, a, b);
        operator = item.target.innerText;
        document.getElementById('display').innerText = displayValue;
        displayValue = '';
    }
  }
}

// Same for keyboard
let storeOperatorByKey = function(item) {
  if (operator === '') {

    // if (a === undefined || a === null) {
      if (displayValue !== '') {
        a = +displayValue;
      }
      operator = item.key;
      displayValue = '';
    // } else {
    //   operator = item.key;
    //   displayValue = '';
    // }

  } else {
    if (displayValue !== '') {
        b = +displayValue;
        a = displayValue = operate(operator, a, b);
        operator = item.key
        document.getElementById('display').innerText = displayValue;
        displayValue = '';
    }
  }
}

// Store 2nd operand and evaluate
const showingResults = function() {
  if (a !== undefined  && displayValue !== '') {
    b = +displayValue;
  }
  if (b !== undefined && operator !== '') {
    a = displayValue = operate(operator, a, b);
    document.getElementById('display').innerText = displayValue;
    displayValue = '';
    operator = '';
  }
}

const fillDisplay = function(item) {

  // Limit digits input
  if (displayValue.length < 10) {

    if (item.target.innerText === '.') {

      // Add 0 in case starting input with "."
      if (displayValue === '') {
        displayValue += '0';
        displayValue += item.target.innerText;
        document.getElementById('display').innerText = displayValue;
      } else {

        // Limit "." input by only one
        if (!displayValue.includes('.'))
        displayValue += item.target.innerText;
        document.getElementById('display').innerText = displayValue;
      }
    } else {
      displayValue += item.target.innerText;
      document.getElementById('display').innerText = displayValue;
    }
  }
}

// Same for keyboard
let fillDisplayByKeys = function(item) {
  if (displayValue.length < 10) {

    if (item.key === '.') {

      if (displayValue === '') {
        displayValue += '0';
        displayValue += item.key;
        document.getElementById('display').innerText = displayValue;
      } else {
        if (!displayValue.includes('.'))
          displayValue += item.key;
        document.getElementById('display').innerText = displayValue;
      }
    } else {
      displayValue += item.key;
      document.getElementById('display').innerText = displayValue;
    } 
  }
}

const clearAll = function() {
  // TODO:
  // The following code works in debagger just fine, but doesn't in browser. 
  // Evaluation just shows blank screen. Mystery to be solved... 
  // I'll go with reload page for now.
  // displayValue = '';
  // operator = '';
  // document.getElementById('display').innerText = displayValue;
  // statusText.innerHTML = '';
  window.location.reload(false);
}

const deleteLastDigit = function() {
  if (displayValue !== '') {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').innerText = displayValue;
  }
}

// Event listeners
const digitButtons = Array.from(document.getElementsByClassName('digit'));

digitButtons.forEach(item => {
  item.addEventListener('click', fillDisplay);
});

const operatorButtons = Array.from(document.getElementsByClassName('operator'));

operatorButtons.forEach(item => {
  item.addEventListener('click', storeOperator);
});

const equalsButton = document.getElementById('equals');

equalsButton.addEventListener('click', showingResults);

const clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clearAll);

const bckspaceButton = document.getElementById('bckspace');

bckspaceButton.addEventListener('click', deleteLastDigit);

document.addEventListener('keydown', function(item) {
  let keyDigitCheck = /[\d\.]/;
  let keyOperatorCheck = /[\+\-\(/)\*]/;
  if (keyDigitCheck.exec(item.key)) {
    fillDisplayByKeys(item);
  } else if (item.key === 'Backspace') {
    deleteLastDigit();
  } else if (item.key === 'Enter' || item.key === "=") {
    showingResults();
  } else if (keyOperatorCheck.exec(item.key)) {
    storeOperatorByKey(item);
  }
})
