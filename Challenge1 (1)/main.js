import Todo from './todo.js';

const goalList = new Todo;

const formItems = {
    selectAll: document.getElementById('all'),
    selectActive: document.getElementById('active'),
    selectDone: document.getElementById('done'),
    newGoal: document.getElementById('new-goal'),
    add: document.getElementById('add'),
    form: document.querySelector('.enterElement'),
    list: document.getElementById('list')
}


formItems.form.addEventListener('submit', event => {
    event.preventDefault();
    addTask();
});

formItems.add.addEventListener('click', () => addTask);

formItems.list.addEventListener('click', event => {
    if(event.target.classList.contains('checkBox')) {
        const itemKey = event.target.parentNode.id;
        goalList.toggleDone(itemKey);
    }
    if(event.target.classList.contains('trash')) {
        const itemKey = event.target.parentNode.id;
        goalList.deleteTask(itemKey);
    }
});

formItems.selectActive.addEventListener('click', () => {
    console.log('I clicked Active');
    formItems.selectAll.classList.remove('selected');
    formItems.selectDone.classList.remove('selected');
    formItems.selectActive.classList.add('selected');

    const showElements = document.getElementsByClassName('active');
    let lenOfEl = showElements.length;
    for(let i = 0; i < lenOfEl; i++) {
        showElements[i].style.display = 'initial';
    }

    const hideElements = document.getElementsByClassName('done');
    lenOfEl = hideElements.length;
    for(let i = 0; i < lenOfEl; i++) {
        hideElements[i].style.display = 'none';
    }

});
formItems.selectDone.addEventListener('click', () => {
    console.log('I clicked done');
    formItems.selectAll.classList.remove('selected');
    formItems.selectActive.classList.remove('selected');
    formItems.selectDone.classList.add('selected');

    const showElements = document.getElementsByClassName('done');
    let lenOfEl = showElements.length;
    for(let i = 0; i < lenOfEl; i++) {
        showElements[i].style.display = 'initial';
    }

    const hideElements = document.getElementsByClassName('active');
    lenOfEl = hideElements.length;
    for(let i = 0; i < lenOfEl; i++) {
        hideElements[i].style.display = 'none';
    }

});
formItems.selectAll.addEventListener('click', () => {
    console.log('I clicked all');
    formItems.selectDone.classList.remove('selected');
    formItems.selectActive.classList.remove('selected');
    formItems.selectAll.classList.add('selected');

    const showElements = document.getElementsByClassName('toDoText');
    const lenOfEl = showElements.length;

    for(let i = 0; i < lenOfEl; i++) {
        showElements[i].style.display = 'initial';
    }
});

function addTask() {
    const input = document.querySelector('.todo-input');
    const text = input.value.trim();
    if (text !== '') {
        goalList.addTask(text);
        input.value = '';
        input.focus();
    }
}

