let displayValue = '';
let a;
let b;
let operator = '';

const add = function(a, b) {
  return (Math.round((a + b) * 10000000000) / 10000000000);
}

const substruct = function(a, b) {
  return (Math.round((a - b) * 10000000000) / 10000000000);
}

const multiply = function(a, b) {
  return (Math.round(a * b * 10000000000) / 10000000000);
}

const divide = function(a, b) {
  return (Math.round(a / b * 10000000000) / 10000000000);
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
    a = +displayValue;
    operator = item.target.innerText;
    displayValue = '';
  } else {
    b = +displayValue;
    a = displayValue = operate(operator, a, b);
    operator = item.target.innerText;
    document.getElementById('display').innerText = displayValue;
    displayValue = '';
  }
}

const showingResults = function() {
  b = +displayValue;
  a = displayValue = operate(operator, a, b);
  document.getElementById('display').innerText = displayValue;
  displayValue = '';
  operator = '';
}

const fillDisplay = function(item) {
  displayValue += item.target.innerText;
  document.getElementById('display').innerText = displayValue;
}

const clearAll = function() {
  displayValue = '';
  a = null;
  b = null;
  operator = null;
  document.getElementById('display').innerText = displayValue;
}

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