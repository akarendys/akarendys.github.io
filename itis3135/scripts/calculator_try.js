let display = document.getElementById('display');

function addContent(value) {
    display.value += value;
}

function clearContent() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculate();
    }
});

function setupCalculatorButtons() {
    var buttons = document.getElementsByClassName("calcBtn");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
            var buttonText = this.innerText;
            if (buttonText === "C") {
                clearContent();
            } else if (buttonText === "=") {
                calculate();
            } else {
                addContent(buttonText);
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setupCalculatorButtons();
});

document.querySelectorAll('.calcBtn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.classList.add('clicked');
      setTimeout(() => this.classList.remove('clicked'), 50); 
    });
  });