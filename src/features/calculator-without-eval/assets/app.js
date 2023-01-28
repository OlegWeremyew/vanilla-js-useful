let a = ""; //first number
let b = ""; //second number
let sign = ""; //operation sign
let finish = false; //status

const digit = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", '.'];
const action = ["-", "+", "X", "/"];

//screen
const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

const acButton = document.querySelector(".ac");
acButton.onclick = clearAll;

const buttons = document.querySelector(".buttons");
buttons.onclick = (event) => {
  //was pressed not button
  if (!event.target.classList.contains('btn')) return;
  //was pressed button "AC"
  if (event.target.classList.contains('ac')) return;

  out.textContent = "";
  //get pressed button
  const key = event.target.textContent;

  //if pressed button with value "0-9" and "."
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
    return;
  }

  //if pressed "+ - / X"
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
  }

  //if pressed "="
  if (key === "=") {

    if (b === "") {
      b = a;
    }

    switch (sign) {
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Error";
          a = "";
          b = "";
          sign = "";
          return;
        }

        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
  }
};