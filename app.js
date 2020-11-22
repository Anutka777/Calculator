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
  if (operator === 'add') {
    return add(a, b);
  } else if (operator === 'substruct') {
    return substruct(a, b);
  } else if (operator === 'multiply') {
    return multiply(a, b);
  } else if (operator === 'divide') {
    return divide(a, b);
  } else return "ERROR";
}

const buttons = Array.from(document.getElementsByClassName('digit'));

// DEL
// const getValue = function(item) {
//   console.log(item.target.innerText);
// };

const fillDisplay = function(item) {
  let displayValue = '';
  displayValue += item.target.innerText;
  console.log(displayValue);
  document.getElementById('display').innerText = displayValue;
}

buttons.forEach(item => {
  item.addEventListener('click', fillDisplay);
});
