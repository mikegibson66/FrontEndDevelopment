/**
 * assignment for each of the buttons in the html file and url assignments
 * @type {{textButton: HTMLElement, apiButton: HTMLElement, outputDiv: HTMLElement}}
 */
const formItems= {
    textButton: document.getElementById('number'),
    apiButton: document.getElementById('chuck'),
    outputDiv: document.getElementById('output'),
    textURL: 'http://numbersapi.com/random',
    apiURL: 'https://api.chucknorris.io/jokes/random'
}

/**
 * Event listener for textButton, constructing a fetch request. Returns a promise that
 * resolves to a string. We can place the string into the <div> with the id of 'output'
 */
formItems.textButton.addEventListener('click', () => {
    fetch(formItems.textURL)
        .then( response => {
            formItems.outputDiv.innerHTML = 'Waiting for response...';
            if(response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then( response => response.text() )
        .then( text => formItems.outputDiv.innerText = text )
        .catch( error => console.log('There was an error:', error))
},false);

/**
 * Event listener for apiButton, constructing a fetch request. Returns JSON, so we use the
 * json() method to return a promise that resolves as a JavaScript object. The object has a
 * value property that contains the Chuck Norris factoid.
 *
 */
formItems.apiButton.addEventListener('click', () => {
    fetch(formItems.apiURL)
        .then( response => {
            formItems.outputDiv.innerHTML = 'Waiting for response...';
            if(response.ok) {
                return response;
            }
            throw Error(response.statusText);
        })
        .then( response => response.json() )
        .then( data => formItems.outputDiv.innerText = data.value )
        .catch( error => console.log('There was an error:', error))
},false);