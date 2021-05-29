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

function addTask() {
    const input = document.querySelector('.todo-input');
    const text = input.value.trim();
    if (text !== '') {
        goalList.addTask(text);
        input.value = '';
        input.focus();
    }
}


