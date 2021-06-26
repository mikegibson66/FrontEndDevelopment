import DynamicLink from "../js/dynamicLink.js";

const dlink = new DynamicLink();

const pageItems = {
    pageOne: "https://reqres.in/api/users?page=1",
    pageTwo: "https://reqres.in/api/users?page=2",
    firstPage: document.getElementById('pageOne'),
    secondPage: document.getElementById('pageTwo'),
    postButton: document.getElementById('postInfo'),
    postName: document.getElementById('postName'),
    postPosition: document.getElementById('postPosition')
}

const links = [
    {
        label: "Main Page",
        url: "../index.html"
    }
]
document.getElementById("directory").innerHTML = dlink.dynamicLnk(links);

function fetchData(url = pageItems.pageOne) {
    console.log("START FETCH");
    fetch(`${url}`)
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data.data);
            const html = data.data.map(user => {
                return `<div class="user">
                    <p><img src="${user.avatar}" alt="${user.last_name}"/>
                        <br>Name: ${user.first_name} ${user.last_name}
                        <br>Email Address: ${user.email}
                    </p>
                </div>
                `;
            }).join('');
            console.log(html);
            document
                .querySelector('#app')
                .innerHTML = `<div id="results">${html}</div>`;
        })
        .catch(error => {
            console.log(error);
        });

}
function postData(name, position) {
    console.log("START POST");
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: `${name}`,
            job: `${position}`
        })
    })
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(`${data.name}, ${data.job}, ${data.id}, ${data.createdAt}`);
            /* pageItems.postResponse.innerHTML =
                `<div id="response">${data.name}, ${data.job}, was posted to ID: ${data.id}, at ${data.createdAt}.</div>`; */
            pageItems.postButton.insertAdjacentHTML("afterend",
                `<div class="response">${data.name}, ${data.job}, was posted to ID: ${data.id}, at ${data.createdAt}.</div>`);
            pageItems.postName.value = '';
            pageItems.postPosition.value = '';
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();

pageItems.firstPage.addEventListener('click', () => {
    fetchData(pageItems.pageOne);
});
pageItems.secondPage.addEventListener('click', () => {
    fetchData(pageItems.pageTwo);
});

pageItems.postButton.addEventListener('click', () => {
    if(pageItems.postName.validity.valid && pageItems.postPosition.validity.valid) {
        console.log(`Name: ${pageItems.postName.value} Position: ${pageItems.postPosition.value}` );
        const name = pageItems.postName.value;
        const position = pageItems.postPosition.value;
        postData(name, position);
    }
})

const emailH5 = document.getElementById('t2');

emailH5.addEventListener('change', (event) => {
    if (emailH5.validity.typeMismatch) {
        emailH5.setCustomValidity(`${event.target.value} is not an email address.`);
    } else {
        emailH5.setCustomValidity('');
    }
});

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form  = document.getElementsByTagName('form')[1];

const emailJS = document.getElementById('JSmail');
const emailError = document.querySelector('#JSmail + span.error');

emailJS.addEventListener('input', () =>{
    // Each time the user types something, we check if the
    // form fields are valid.

    if (emailJS.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.textContent = ''; // Reset the content of the message
        emailError.className = 'error'; // Reset the visual state of the message
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit

    if(!emailJS.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
    }
});

function showError() {
    if(emailJS.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        emailError.textContent = 'You need to enter an e-mail address.';
    } else if(emailJS.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(emailJS.validity.tooShort) {
        // If the data is too short,
        // display the following error message.
        emailError.textContent = `Email should be at least ${ emailJS.minLength } characters; you entered ${ emailJS.value.length }.`;
    }

    // Set the styling appropriately
    emailError.className = 'error active';
}

// There are fewer ways to pick a DOM node with legacy browsers
const form2  = document.getElementsByTagName('form')[2];
const email = document.getElementById('mail');

// The following is a trick to reach the next sibling Element node in the DOM
// This is dangerous because you can easily build an infinite loop.
// In modern browsers, you should prefer using element.nextElementSibling
let error = email;
while ((error = error.nextSibling).nodeType !== 1);

// As per the HTML5 Specification
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Many legacy browsers do not support the addEventListener method.
// Here is a simple way to handle this; it's far from the only one.
function addEvent(element, event, callback) {
    let previousEventCallBack = element["on"+event];
    element["on"+event] = function (e) {
        let output = callback(e);

        // A callback that returns `false` stops the callback chain
        // and interrupts the execution of the event callback.
        if (output === false) return false;

        if (typeof previousEventCallBack === 'function') {
            output = previousEventCallBack(e);
            if(output === false) return false;
        }
    }
}

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
addEvent(window, "load", function () {
    // Here, we test if the field is empty (remember, the field is not required)
    // If it is not, we check if its content is a well-formed e-mail address.
    const test = email.value.length === 0 || emailRegExp.test(email.value);

    email.className = test ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
addEvent(email, "input", function () {
    const test = email.value.length === 0 || emailRegExp.test(email.value);
    if (test) {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    } else {
        email.className = "invalid";
    }
});

// This defines what happens when the user tries to submit the data
addEvent(form2, "submit", function () {
    const test = email.value.length === 0 || emailRegExp.test(email.value);

    if (!test) {
        email.className = "invalid";
        error.textContent = `" ${email.value} " isn't an email, is it?`;
        error.className = "error active";

        // Some legacy browsers do not support the event.preventDefault() method
        return false;
    } else {
        email.className = "valid";
        error.textContent = "";
        error.className = "error";
    }
});