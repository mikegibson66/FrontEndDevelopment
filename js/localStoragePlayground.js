const formItems = {
    form: document.querySelector('form'),
    ul: document.querySelector('ul'),
    button: document.querySelector('button'),
    input: document.getElementById('item'),
    itemsArray: localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []
}

localStorage.setItem('items', JSON.stringify(formItems.itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    formItems.ul.appendChild(li);
}

formItems.form.addEventListener('submit', function (e) {
    e.preventDefault();

    formItems.itemsArray.push(formItems.input.value);
    localStorage.setItem('items', JSON.stringify(formItems.itemsArray));

    liMaker(formItems.input.value);

    formItems.input.value = '';
    formItems.input.focus();
});

data.forEach(item => {
    liMaker(item);
})

formItems.button.addEventListener('click', () => {
    localStorage.clear();
    while (formItems.ul.firstChild) {
        formItems.ul.removeChild(formItems.ul.firstChild);
    }
    formItems.itemsArray = [];
});




