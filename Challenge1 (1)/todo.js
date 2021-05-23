class Todo {
    todoTasks = [];

    addTask(text) {
        const todoItem = {
            text,
            checked: false,
            id: Date.now()
        };

        this.todoTasks.push(todoItem);
        console.log(this.todoTasks)
    }

    get() {
        return this.todoTasks;
    }

    set(todoTasks) {
        this.todoTasks = todoTasks;
    }
}