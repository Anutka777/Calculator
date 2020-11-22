let displayValue = '';
let a;
let b;
let operator;

const add = function(a, b) {
  return a + b;
}

const substruct = function(a, b) {
  return a - b;
}

const multiply = function(a, b) {
  return a * b;
}

const divide = function(a, b) {
  return a / b;
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
  } else return "ERROR";
}

let storeOperator = function(item) {
  a = +displayValue;
  operator = item.target.innerText;
  displayValue = '';
}

const showingResults = function() {
  b = +displayValue;
  displayValue = operate(operator, a, b);
  document.getElementById('display').innerText = displayValue;
  displayValue = '';
}

const fillDisplay = function(item) {
  displayValue += item.target.innerText;
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