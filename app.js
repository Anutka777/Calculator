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