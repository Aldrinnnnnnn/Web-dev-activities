function plus() {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (num !== "0" && num !== "") {
        if (num2 !== "") {
            document.getElementById('display2').value = calculate(Number(num2), Number(num), operator);
        } else {
            document.getElementById('display2').value = num;
        }
        document.getElementById('display').value = "0";
    }

    document.getElementById('operator').value = '+';
}

function multiply() {
    const num = document.getElementById('display').value; 
    const num2 = document.getElementById('display2').value; 
    const operator = document.getElementById('operator').value; 

    if (num !== "0" && num !== "") {
        if (num2 !== "") {
            document.getElementById('display2').value = calculate(Number(num2), Number(num), operator);
        } else {
            document.getElementById('display2').value = num;
        }
        document.getElementById('display').value = "0";
    }

    document.getElementById('operator').value = '*';
}

function minus() {
    const num = document.getElementById('display').value; 
    const num2 = document.getElementById('display2').value; 
    const operator = document.getElementById('operator').value; 

    if (num !== "0" && num !== "") {
        if (num2 !== "") {
            document.getElementById('display2').value = calculate(Number(num2), Number(num), operator);
        } else {
            document.getElementById('display2').value = num;
        }
        document.getElementById('display').value = "0";
    }

    document.getElementById('operator').value = '-';
}

function divide() {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    if (num !== "0" && num !== "") {
        if (num2 !== "") {
            document.getElementById('display2').value = calculate(Number(num2), Number(num), operator);
        } else {
            document.getElementById('display2').value = num;
        }
        document.getElementById('display').value = "0";  
    }

    document.getElementById('operator').value = '/';  
}

function equals() {
    const num = document.getElementById('display').value;
    const num2 = document.getElementById('display2').value;
    const operator = document.getElementById('operator').value;

    let answer;

    if (operator == "+") {
        answer = Number(num) + Number(num2);
    } else if (operator == "-") {
        answer = Number(num2) - Number(num);
    } else if (operator == "*") {
        answer = Number(num2) * Number(num);
    } else if (operator == "/") {
        if (Number(num) === 0) {
            alert("Cannot divide by zero");
            return;
        }
        answer = Number(num2) / Number(num);
    }

    document.getElementById('display').value = answer;
    document.getElementById('display2').value = "";
    document.getElementById('operator').value = "";
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num1;
    }
}
