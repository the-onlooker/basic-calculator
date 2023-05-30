document.addEventListener("DOMContentLoaded", function() {
  var loadingOverlay = document.querySelector(".loading-overlay");

  // Hide the loading overlay after 2.8 seconds
  setTimeout(function() {
      loadingOverlay.classList.add("hide");
      setTimeout(function() {
          loadingOverlay.style.display = "none";
      }, 500);
  }, 2800);
});

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let expression = '';

buttons.forEach((item) => {
  item.onclick = () => {
      if (item.id === "clear") {
          display.innerText = "";
      } else if (item.id === "backspace") {
          let string = display.innerText.toString();
          display.innerText = string.substr(0, string.length - 1);
      } else if (item.id === "equal") {
          if (display.innerText !== "") {
              display.innerText = eval(display.innerText);
          } else {
              display.innerText = "";
              setTimeout(() => (display.innerText = ""), 2000);
          }
      } else {
          display.innerText += item.id;
      }
  };
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;

themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;

  const container = document.querySelector(".container");
  container.classList.toggle("dark");

  if (isDark) {
      document.body.style.backgroundImage = "url('darkbg.png')";
  } else {
      document.body.style.backgroundImage = "url('lightbg.png')";
  }
};

// Keyboard events
document.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key >= '0' && key <= '9') {
      display.innerText += key;
  } else if (key === 'c') {
      display.innerText = '';
  } else if (key === '/') {
      display.innerText += '/';
  } else if (key === '*' || key === 'x') {
      display.innerText += '*';
  } else if (key === '-' || key === '–') {
      display.innerText += '-';
  } else if (key === '+') {
      display.innerText += '+';
  } else if (key === '(') {
      display.innerText += '(';
  } else if (key === ')') {
      display.innerText += ')';
  } else if (key === 'Backspace' || key === 'Delete') {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
  } else if (key === 'Enter' || key === '=') {
      if (display.innerText !== "") {
          display.innerText = eval(display.innerText);
      } else {
          display.innerText = "";
          setTimeout(() => (display.innerText = ""), 2000);
      }
  }
});