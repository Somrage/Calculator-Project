const display = document.querySelector('#display');
const btnDigits = document.querySelectorAll('.digit');
const btnOperator = document.querySelectorAll('.operator');
const btnEquals = document.querySelector('.equals');
const btnClear = document.querySelector('.clear');
const btnDecimal = document.querySelector('.decimal');
const btnBackspace = document.querySelector('.backspace');
let a = 0;
let b = 0;
let operator = '';
let result;
let decimalPoint = false;

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

//to count numbers after decimal point and use toFixed to prevent result overflow display
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
      else if (display.textContent === '0') {
        display.textContent = button.textContent;
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
      operator = '';
    }
  });

  btnClear.addEventListener('click', () => {
    display.textContent = '0';
    a = 0
    b = 0
    operator = ''
  });

  btnDecimal.addEventListener('click', e => {
    if (display.textContent.includes('.')) {
      e.preventDefault();
    }
    else {
      display.textContent += btnDecimal.textContent;
    }
  })

  btnBackspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
  })
}

calculator();
