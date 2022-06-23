const display = document.querySelector('#display');
const btnDigits = document.querySelectorAll('.digit');
const btnOperator = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('.equals');
const btnClear = document.querySelector('.clear');
let a = 0;
let b = 0;
let operator = '';
let result;

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return add(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '-') {
        return substract(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
}

//to count numbers after decimal point and use toFixed
function decimalCount(number) {
  let numStr = String(number);
  if (numStr.includes('.')) {
    return numStr.split('.')[1].length;
  }
  else {
    return 0;
  }
}

function calculator() {
  btnDigits.forEach(button => {
    button.addEventListener('click', () => {
      if (result !== '') {
        display.textContent = button.textContent;
        result = ''
      }
      else {
        display.textContent += button.textContent;
      }
    })
  });

  btnOperator.forEach(button => {
    button.addEventListener('click', () => {
      if (operator !== '') {
        b = Number(display.textContent);
        a = operate(operator, a, b);
        operator = button.value;
        display.textContent = ''
      }
      else {
        a = Number(display.textContent);
        operator = button.value;
        display.textContent = '';
      }
    })
  });

  btnEquals.addEventListener('click', () => {
    if (operator === '') {
      display.textContent = display.textContent;
    }
    else {
      b = Number(display.textContent);
      result = operate(operator, a, b);

      if (decimalCount(result) > 4) {
        display.textContent = result.toFixed(4);
      }
      else {
        display.textContent = result;
      }

      a = Number(display.textContent);
    }
  });

  btnClear.addEventListener('click', () => {
    display.textContent = '';
    a = 0
    b = 0
    operator = ''
  });
}

calculator();
