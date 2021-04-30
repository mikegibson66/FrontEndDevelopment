/* script for requirement 1 */

function displayNum(){
    const num1 = document.getElementById("input1").value;
    document.getElementById("output1").innerHTML = 'You entered: ' + num1 + '.';
}

/* script for requirement 2 */
function sumUp() {
    const num2 = document.getElementById("input2").value;

    // set input to a number
    const num2Int = parseInt(num2);

    // only calculate if the entry is a number
    if (!isNaN(num2Int)) {
        document.getElementById("output2").innerHTML = 'Total sum: ' + sum(num2Int);
    }

}

/* calculate the sum */
function sum(input) {
    let sum = 0;

    for (let i = 1; i <= input; i++) {
        sum += i;
    }

    return sum;
}

/* script for requirement 3 */
function addUp() {
    const num3 = document.getElementById("input3").value;
    const num4 = document.getElementById("input4").value;

    const num3Float = parseFloat(num3);
    const num4Float = parseFloat(num4);

    if (!isNaN(num3Float) && !isNaN(num4Float)) {
        document.getElementById("output3").innerHTML = `${num3Float} + ${num4Float} = ${add(num3Float, num4Float)}`;
    }
}

/* add them up */
function add(num1, num2) {
    return num1 + num2;
}

/* Stretch scripts */

function updateOutput(opPerf, value) {
    document.getElementById('stretchOutput').innerHTML = `${opPerf}: ${value}`;
}

/* return value entered as a number (float) */
function getFloat(number) {
    const num = document.getElementById(number).value;
    const numFloat = parseFloat(num);
    if (!isNaN(numFloat)) {
        return numFloat;
    } else {
        return 0;
    }
}

/* arrow function addition */
const addStretch = (num1, num2) => num1 + num2;

/* expression function multiplication */
const multStretch = function(num1, num2) {
    return num1 * num2;
};

/* declared function subtraction and division */
function subStretch(num1, num2) {
    return num2 - num1;
}

function quotientStretch(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    } else {
        return num1 / num2;
    }
}

function callOperation(operation, opPerf) {
    const finalValue = operation(getFloat('stretchNum1'), getFloat('stretchNum2'));
    updateOutput(opPerf, finalValue);
}