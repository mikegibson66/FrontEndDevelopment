const listen = {
    sqrt: document.getElementById('findSqRt'),
    sqrt2: document.getElementById('findSqRt2')
}

const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "Testing and Debugging - Notes",
        url: "W05 - Testing and Debugging"
    },
    {
        label: "W05 - Team Activity",
        url: "hikes.html"
    },
    {
        label: "New Quiz Ninja with console notifications",
        url: "W05-quizNinja.html"
    },
    {
        label: "Challenge 1 - Mock-up",
        url: "Todo-Screens.pdf"
    }
]


function dynamicLnk() {
    let finLink = '<ol>';

    for (let i = 0, max = links.length; i < max; i++) {
        finLink += '<li><a href="' + links[i].url + '">' + links[i].label + '</a></li>';
    }

    finLink += '</ol>';

    document.getElementById("directory").innerHTML = finLink;
}

/*
* finds the square root of a number, throwing an exception for negative numbers
* This is an example of exception throwing
 */
function squareRoot(number) {
    'use strict';
    if(number < 0) {
        alert('this is a negative number!');
        throw new RangeError('JavaScript does not allow finding the square root of negative numbers');
    }
    return Math.sqrt(number);
}
/*
* using try, catch, finally to handle square roots for possible user entries
 */
function imaginarySqRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch (error) {
        answer = squareRoot(-number) + 'i';
    } finally {
        return `± ${answer}`;
    }
}

/*
* display square root result
 */
function displaySqRt(processOption,destination,number) {
    // clear previous entry
    let sqRt;
    document.getElementById(destination).innerHTML = '';
    switch (processOption){
        case 1:
            sqRt = squareRoot(number);
            break;
        case 2:
            sqRt = imaginarySqRoot(number);
            break;
        default:
            break;
    }

    document.getElementById(destination).innerHTML = `  ---> the square root of ${number} is ${sqRt}`;
}

listen.sqrt.addEventListener('click',() => displaySqRt(1, 'sqrtFound',document.getElementById('sqrt-1').value));
listen.sqrt2.addEventListener('click',() => displaySqRt(2,'sqrtFound2',document.getElementById('sqrt-2').value));

window.onload = dynamicLnk;