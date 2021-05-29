class Todo {
    todoTasks = [];

    addTask(text) {
        const todoItem = {
            text,
            checked: false,
            id: Date.now()
        };

        this.todoTasks.push(todoItem);
        console.log(this.todoTasks);
        this.renderTodo(todoItem);
    }

    renderTodo(todoItem) {
        // select the list element in the DOM
        const list = document.getElementById('list');
        const item = document.querySelector(`[data-key = '${todoItem.id}']`);

        // to remove deleted elements from list
        if(todoItem.deleted) {
            item.remove();
            return
        }

        const isChecked = todoItem.checked ? 'toDoComplete' : '';
        const checked = todoItem.checked ? 'checked' : '';
        const completed = todoItem.checked ? 'done' : 'active';

        const node = document.createElement('div');
        node.setAttribute('class', `toDoText ${completed}`);
        node.setAttribute('data-key', todoItem.id);

        node.innerHTML = `
        <div class="listItem" id="${todoItem.id}">
            <input type="checkbox" class="checkBox" ${checked}>
            <div class="toDoText ${isChecked}">${todoItem.text}</div>
            <div class="trash">🗑</div>
        </div>
        `;

        if (item) {
            // if item exists, replace
            list.replaceChild(node, item);
        } else {
            // if it doesn't, append to the list
            list.append(node);
        }
    }

    toggleDone(key) {
        const index = this.todoTasks.findIndex(item => item.id === Number(key));
        this.todoTasks[index].checked = !this.todoTasks[index].checked;
        this.renderTodo(this.todoTasks[index]);
    }


    deleteTask(key) {
        // find object in the todoTasks array
        const index = this.todoTasks.findIndex(item => item.id === Number(key));

        // create a new object with the properties of the object to be deleted
        const todo = {
            deleted: true,
            ...this.todoTasks[index]
        }

        // remove the object to be deleted from the array by filtering it out
        this.todoTasks = this.todoTasks.filter(item => item.id !== Number(key));
        console.log(this.todoTasks);
        this.renderTodo(todo);
    }

}

export default Todo;