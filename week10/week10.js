import DynamicLink from "../js/dynamicLink.js";

const dlink = new DynamicLink();

const links = [
    {
        label: "Main Page",
        url: "../index.html"
    }
]
document.getElementById("directory").innerHTML = dlink.dynamicLnk(links);

function fetchData() {
    console.log("START FETCH");
    fetch('https://reqres.in/api/users?page=2')
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
                .innerHTML = `<h3>Sample Data</h3><div id="results">${html}</div>`;

        })
        .catch(error => {
            console.log(error);
        });

}
function postData() {
    console.log("START POST");
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: "morpheus",
            job: "leader"
        })
    })
        .then(response => {
            if(!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

}
postData();
fetchData();