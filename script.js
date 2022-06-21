const display = document.querySelector('#display');
let displayValueA

const btn = document.querySelectorAll('.btn');
let operator

btn.forEach(button => {
  button.addEventListener('click', () => {
    if (button.className === 'btn equals') {
      operate
    }
    else if (button.className === 'btn digit') {
      display.textContent += button.textContent;
    }
    else if (button.className === 'btn operator') {
      display.textContent = button.textContent;
      operator = button.textContent;
    }
    else if (button.className === 'btn clear') {
      display.textContent = '';
    }
  })
});


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
