const input = document.querySelector('.input')

function insert(num) {
  if (input.textContent === "0") {
    input.textContent = ""
    input.textContent += num
    return;
  }

  input.textContent += num;
}

function clean() {
  input.textContent = "0";
}

function back() {
  let exp = input.textContent
  input.textContent = exp.substring(0, exp.length - 1);
  if (input.textContent === "0") {
    input.textContent = "0"
  }
}

function equal() {
  let exp = input.textContent
  if (exp) {
    input.textContent = eval(exp)
  }
}

function percent() {
  input.textContent = eval(input.textContent / 100)
}

//for constants additing
function constant(name) {
  if (input.textContent === "0") {
    input.textContent = ""
  }

  if (name === "pi") {
    input.textContent += (Math.PI).toFixed(7)
  }
  if (name === "e") {
    input.textContent += (Math.E).toFixed(7)
  }
}

//sqrt
function operations(name) {
  if (input.textContent === "0") {
    input.textContent = ""
  }

  if (name === "sqrt") {
    input.textContent = Math.sqrt(eval(input.textContent))
  }

  if (name === "sqr") {
    input.textContent = eval(Math.pow(input.textContent, 2))
  }

  if (name === "^-1") {
    input.textContent = eval(Math.pow(input.textContent, -1))
  }

  if (name === "^") {
    input.textContent += "**"
  }
}

function factorial(n) {
  return (n !== 1) ? n * factorial(n - 1) : 1;
}

function fact() {
  input.textContent = factorial(+eval(input.textContent))
}

//logs
function log(name) {
  if (name === "log") {
    input.textContent = Math.log(+eval(input.textContent)).toFixed(8)
  }

  if (name === "ln") {
    input.textContent = Math.log10(+eval(input.textContent)).toFixed(8)
  }
}


//rad ar deg
const showingType = document.querySelector('.type')

showingType
  .addEventListener("click", function () {
    if (showingType.textContent === "deg") {
      showingType.textContent = "rad"
    } else if (showingType.textContent === "rad") {
      showingType.textContent = "deg"
    }
  })

//sin, cos, tan, ctg
function maths(name) {
  if (name === "sin") {
    if (showingType.textContent === 'deg') {
      input.textContent = parseFloat(Math.sin(+eval(input.textContent) / 180 * Math.PI).toFixed(8).toString())
    } else {
      input.textContent = parseFloat(Math.sin(+eval(input.textContent)).toFixed(8).toString())
    }
  }

  if (name === "cos") {
    if (showingType.textContent === 'deg') {
      input.textContent = parseFloat(Math.cos(+eval(input.textContent) / 180 * Math.PI).toFixed(8).toString())
    } else {
      input.textContent = parseFloat(Math.cos(+eval(input.textContent)).toFixed(8).toString())
    }

  }

  if (name === "tan") {
    if (showingType.textContent === 'deg') {
      input.textContent = parseFloat(Math.tan(+eval(input.textContent) / 180 * Math.PI).toFixed(8).toString())
    } else {
      input.textContent = parseFloat(Math.tan(+eval(input.textContent)).toFixed(8).toString())
    }
  }

  if (name === "ctg") {
    if (showingType.textContent === 'deg') {
      input.textContent = parseFloat(1 / Math.ct(+eval(input.textContent) / 180 * Math.PI).toFixed(8).toString())
    } else {
      input.textContent = parseFloat(1 / Math.ct(+eval(input.textContent)).toFixed(8).toString())
    }
  }
}
