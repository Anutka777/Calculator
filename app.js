let displayValue = '';
let a;
let b;
let operator = '';

const statusText = document.getElementById('status');

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

let storeOperator = function(item) {
  if (operator === '') {

    // Case initial(first) operation - we don't have first operand
    if (a === undefined || a === null) {
      if (displayValue !== '') {
        a = +displayValue;
      }
      operator = item.target.innerText;
      displayValue = '';
    } else {

      // Case after "=" - first operand is already on display
      operator = item.target.innerText;
    }
  } else {
    if (displayValue !== '') {
        // Chain evaluation
        b = +displayValue;
        a = displayValue = operate(operator, a, b);
        operator = item.target.innerText;
        document.getElementById('display').innerText = displayValue;
        displayValue = '';
    }
  }
}

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
  if (displayValue.length < 10) {
    if (item.target.innerText === '.') {
      if (displayValue === '') {
        displayValue += '0';
        displayValue += item.target.innerText;
        document.getElementById('display').innerText = displayValue;
      } 
    } else {
      displayValue += item.target.innerText;
      document.getElementById('display').innerText = displayValue;
    }
  }
}

const clearAll = function() {
  displayValue = '';
  a = null;
  b = null;
  operator = '';
  document.getElementById('display').innerText = displayValue;
  statusText.innerHTML = '';
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

const dotButton = document.getElementById('dot');