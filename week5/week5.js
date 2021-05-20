const listen = {
    sqrt: document.getElementById('findSqRt')
}

const links = [
    {
        label: "Main Page",
        url: "../index.html"
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
* display square root result
 */
function displaySqRt(number) {
    // clear previous entry
    document.getElementById('sqrtFound').innerHTML = '';
    const sqRt = squareRoot(number);
    document.getElementById('sqrtFound').innerHTML = `---> the square root of ${number} is ${sqRt}`;
}

listen.sqrt.addEventListener('click',() => displaySqRt(document.getElementById('sqrt-1').value));

window.onload = dynamicLnk;