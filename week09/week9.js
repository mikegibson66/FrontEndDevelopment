import DynamicLink from "../js/dynamicLink.js";

const dlink = new DynamicLink();

const formItems = {
    squareElement: document.getElementById('square'),
    secondElement: document.getElementById('second'),
    coords: document.getElementById('coordinates'),
    getGeoButton: document.getElementById('geoLocate'),
    factButton: document.getElementById('numSub'),
    url: 'wss://echo.websocket.org', // accepts messages and returns the same message like an echo
    message: document.getElementById('message'),
    messButton: document.getElementById('messSub'),
    messOutput: document.getElementById('outputMess')
}

const links = [
    {
        label: "Main Page",
        url: "../index.html"
    },
    {
        label: "JavaScript Drum Kit",
        url: "W09-TeamActivity_JS-DrumKit.html"
    },
    {
        label: "Quiz Ninja - Week 09",
        url: "QuizNinja09.html"
    },
    {
        label: "The Window Object - Notes",
        url: "W09-TheWindowObject.pdf"
    },
    {
        label: "HTML5 APIs",
        url: "W09-HTML5_APIs.pdf"
    }
]
document.getElementById("directory").innerHTML = dlink.dynamicLnk(links);

let angle = 0;
let secAngle = 45;
let mapLink = '';
let textContent = '';
const connection = new WebSocket(formItems.url);
const notification = new Notification('JavaScript: Novice to Ninja', {
    body: 'The new book from SitePoint',
    icon: '../images/sitepointlogo.png'
});

setInterval( () => {
    angle = (angle + 3) % 360;
    formItems.squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);

function rotate() {
    secAngle = (secAngle - 1) % 360;
    formItems.secondElement.style.transform = `rotate(${secAngle}deg)`
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);

function youAreHere (position) {
    textContent = `<h4>Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}</h4>`;
    mapLink = `https://www.openstreetmap.org/#map18/${position.coords.latitude}/${position.coords.longitude}`;
    formItems.coords.innerHTML = `<a href="${mapLink}" target="_blank">${textContent}</a>`;
}

function factorize(num) {
    document.getElementById('output').innerHTML = '<p>This could take a moment...</p>';

    if(window.Worker) {
        const worker = new Worker('factors.js');
        worker.postMessage(num);
        worker.addEventListener('message', (event) => {
            document.getElementById('output').innerHTML = event.data;
        }, false);
    } else {
        document.getElementById('output').innerText = factorsOf(num);
    }

}
function factorsOf(n)  {
    if(Number.isNaN(n)) {
        throw new RangeError('Argument Error: Value must be an integer');
    }
    if(n < 0) {
        throw new RangeError('Argument Error: Number must be positive');
    }
    if(!Number.isInteger(n)) {
        throw new RangeError('Argument Error: Number must be an integer');
    }
    const factors = [];
    for (let i=1 , max = Math.sqrt(n); i <= max ; i++) {
        if (n%i === 0){
            factors.push(i,n/i);
        }
    }
    return factors.sort((a,b) =>  a - b);
}

function output(message) {
    const para = document.createElement('p');
    para.innerHTML = message;
    formItems.messOutput.appendChild(para);
}

function message(message) {
    output(`SENT: ${message}`);
    connection.send(message);
}

formItems.getGeoButton.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(youAreHere)
});
formItems.factButton.addEventListener('click', () => {
    factorize(parseInt(document.getElementById('number').value));
});
formItems.messButton.addEventListener('click', () => {
    message(formItems.message.value);
}, false);
connection.addEventListener('open', () => {
    output('CONNECTED');
}, false);
connection.addEventListener('message', (event) => {
    output(`ECHO: ${event.data}`);
}, false);

if(window.Notification) {
    Notification.requestPermission()
        .then((permission) => {
            if(Notification.permission === 'granted') {
                new Notification('Hello JavaScript')
            }
        });
}




