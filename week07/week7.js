import DynamicLink from "../js/dynamicLink.js";

const dlink = new DynamicLink();

const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "Ajax Examples 1",
        url: "ajax.html"
    },
    {
        label: "Ajax Examples 2",
        url: "todoAjax.html"
    },
    {
        label: "FormData Objects Playground",
        url: "formDataPlayground.html"
    },
    {
        label: "localStorage Playground",
        url: "localStoragePlayground.html"
    },
    {
        label: "Further Functions Notes - Chapter 11",
        url: "W07- Further Functions.pdf"
    },
    {
        label: "Further Functions Code Examples - Chapter 11",
        url: "W07 - Further Functions Code Examples.pdf"
    },
    {
        label: "Ajax Notes - Chapter 13",
        url: "W07 - AJAX.pdf"
    },
    {
        label: "Web Storage Research - localStorage",
        url: "W07 – Web Storage (localStorage).pdf"
    },
    {
        label: "Quiz Ninja - Further Functions",
        url: "W07-quizNinja.html"
    },
    {
        label: "Quiz Ninja - AJAX",
        url: "W07b-quizNinja.html"
    },
    {
        label: "Week 7 - Hikes",
        url: "../hikes/hiking-complete.html"
    }
]

const formItems = {
    findFactorial: document.getElementById('findFactorial'),
    findCollatz: document.getElementById('findCollatz'),
    findRandom: document.getElementById('findRandom'),
    findNext: document.getElementById('findNext')
}

document.getElementById("directory").innerHTML = dlink.dynamicLnk(links);


function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function collatz (n, sequence = [n]) {

    if (n === 1) {
        return `Sequence took ${sequence.length} steps. It was ${sequence}`;
    }

    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = 3 * n + 1;
    }

    return collatz(n, [...sequence, n]);
}

function randomA(a, b = 1) {
    // if a single argument is provided, we need to swap the values of a and b
    if (b === 1) {
        [a,b] = [b,a];
    }
    // random number between a and b or 1 and a if just a single argument was provided
    return Math.floor((b - a + 1) * Math.random()) + a;
}


function displayResult(func, dest, value) {
    let result;
    let type;

    document.getElementById(dest).innerHTML = '';

    switch (func) {
        case 1:
            result = factorial(value);
            type = 'Factorial';
            break;
        case 2:
            result = collatz(value);
            type = 'Collatz'
            break;
        case 3:
            result = randomA(value);
            type = `Random number between 1 and ${value} is`
            break;
    }

    document.getElementById(dest).innerHTML = `${type}: ${result}`;
}

formItems.findFactorial.addEventListener('click', () => displayResult(1,'placeFactorial',
    document.getElementById('factorialInput').value));
formItems.findCollatz.addEventListener('click', () => displayResult(2,'placeCollatz',
    document.getElementById('collatzInput').value));
formItems.findRandom.addEventListener('click', () => displayResult(3,'placeRandom',
    document.getElementById('randomInput').value));

window.onload = dynamicLnk;