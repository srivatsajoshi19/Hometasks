let argsArray = process.argv.slice(2);

let operation = argsArray[0];

let arr = argsArray.slice(1);

switch (operation) {
  case "addition":
    console.log(add(arr));
    break;
  case "subtraction":
    console.log(subtract(arr));
    break;
  case "multiplication":
    console.log(multiply(arr));
    break;
  case "division":
    console.log(divide(arr));
    break;

  default:
    console.log("Invalid");
    break;
}

function add(arr) {
  if (arr.length < 3) {
    console.log("Pass 2 arguments");
  }
  let numArray = arr.map(Number);
  let res = numArray.reduce((a, b) => a + b, 0);
  return res;
}

function subtract(arr) {
  if (arr.length !== 2) {
    console.log("Pass 2 arguments");
    process.exit(1);
  } else {
    let res = arr[0] - arr[1];
    return res;
  }
}

function multiply(arr) {
  let numArray = arr.map(Number);
  let res = numArray.reduce((a, b) => a * b, 1);
  return res;
}

function divide(arr) {
  if (arr.length !== 2) {
    return new Error("Pass 2 numbers");
  } else {
    if (+arr[1]) {
      let res = +arr[0] / +arr[1];
      res = Math.round(res);
      return res;
    } else {
      return new Error("Cannot divide by zero");
    }
  }
}
