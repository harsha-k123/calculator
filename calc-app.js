// declaring all the buttons and operands in variables

let operandOne = "";
let operator = "";
let operandTwo = "";
let result = "";
let display = document.querySelector("#write-area");
let numBtn = document.querySelectorAll(".num");
let operatorBtn = document.querySelectorAll(".operation");
let equalBtn = document.querySelector("#equal");
let clearBtn = document.querySelector("#clear");

let storingOperandTwo = false;

// function to store operand value

function storeOperand() {
    if(storingOperandTwo == false){
        operandOne = display.value;
    }
    else {
        operandTwo = display.value;
    }
}

numBtn.forEach((num) => {
    num.addEventListener("click", () => {
        display.value += num.textContent;
        storeOperand();
    })
})

// function to store operator 

operatorBtn.forEach((op) => {
    op.addEventListener("click", () => {
        operator = op.textContent;
        storingOperandTwo = true;
        display.value = "";
    })
})

// clear button

clearBtn.addEventListener("click", () => {
    display.value = "";
    operandOne = "";
    operandTwo = "";
    operator = "";
})

// operations

equalBtn.addEventListener("click", () => {
    operandOne = parseFloat(operandOne);
    operandTwo = parseFloat(operandTwo);

    switch(operator){
        case "+":
            result = operandOne + operandTwo;
            break;
        case "-":
            result = operandOne - operandTwo;
            break;
        case "*":
            result = operandOne * operandTwo;
            break;
        case "/":
            result = operandOne / operandTwo;
            if (operandTwo == 0) {
                result = "lol no";
            }
            break; 
    }
    display.value = result;
    operandOne = result.toString(); 
    operandTwo = "";
    storingOperandTwo = false;
})






