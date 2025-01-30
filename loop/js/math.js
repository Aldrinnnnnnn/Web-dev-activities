function sum() {
    const num = document.getElementById('number').value;

    /* document.getElementById('display').innerHTML = "sample"; */

    const display = document.getElementById('display');

    let answer = "";
    let sum = 0;

    for (let a = 1; a <= num; a++) {
        answer += a + "<br/>"
        sum += a;

    }                                
    answer += "The sum is "
    display.innerHTML = answer;
}

function factorial() {
    let number = document.getElementById('number').value;

    /* const display = document.getElementById('display'); */

    let answer = '';
    let product = number;
    let num = number;
    while (num > 1) {
        answer += num + "<br/>"
        product *= (num - 1);
        num--;
    }

    answer += num + "<br/>"
    answer += "The factorial of " + number + "is" + product;
    document.getElementById('display').innerHTML = answer;

}

function odd() {
    let number = document.getElementById('number').value;

    let answer = '';
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            answer += i + "<br/>";

        }
    }

    document.getElementById('display').innerHTML = "Odd numbers up to " + number + " are:<br/>" + answer;
}
function even() {
    let number = document.getElementById('number').value;

    let answer = '';
    for (let i = 1; i <= number; i++) {
        if (i % 2 === 0) {
            answer += i + "<br/>";

        }
    }

    document.getElementById('display').innerHTML = "Even numbers up to " + number + " are:<br/>" + answer;
}
    

