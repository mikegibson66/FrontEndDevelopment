const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

/**
 * the task creates an object with title and completed properties. the object is transformed into JSON using
 * JSON.stringify method. This is assigned to the variable data. Headers and Requests objects include headers of
 * 'Accept':'application/json' and 'Content-Type':'application/json'. The method property of the request object is
 * POST, the POST request is used to send the data.
 *
 * body property of the request object is where the data is placed.
 *
 * fetch() is used to send the request and deal with the response, creating the promise that resolves to a JSON object.
 *
 * only response in browser is an update in the console. Usually, there would be a more verbose response from the server
 * than just the id.
 * @param event
 */
function addTask(event) {
    event.preventDefault();
    const number = form.task.value;
    const task = {
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    const request = new Request(url,
        {
            method: 'POST',
            header: headers,
            body: data
        }
    )
    fetch(request)
        .then( response => response.json() )
        .then( task => console.log(`Task saved with an id of ${task.id}`) )
        .catch( error => console.log('There was an error:', error))
}