function calculate() {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;
    let result;
    if (isNaN(number1 && number2)) {
      result = "Input not Valid";
    } 
    else {
      switch (operation) {
        case "add":
          result = number1 + number2;
          break;
        case "subtract":
          result = number1 - number2;
          break;
        case "multiply":
          result = number1 * number2;
          break;
        case "divide":
          if (number2 === 0) {
            result = "Error: Division by zero";
            break;
          } else {
            result = number1 / number2;
          }
          break;
        default:
          result = "Invalid operation";
      }
    }
    document.getElementById("result").innerHTML = "Result: " + result;
  }