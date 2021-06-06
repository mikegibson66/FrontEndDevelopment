class LocalStorage {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    create(todoItems) {
        todoItems.token = this.token;

        this.tasks.push(todoItems);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    update(todoItems) {
        let index = this.getIndexByToken(todoItems.token);

        if (index !== -1) {
            this.tasks[index] = todoItems;

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }

    delete(todoItems) {
        let index = this.getIndexByToken(todoItems.token);

        if (index !== -1) {
            this.tasks.splice(index, 1);

            localStorage.setItem('tasks', JSON.stringify(this.tasks));
        }
    }

    getIndexByToken(token) {
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].token === token) {
                return i;
            }
        }
        return -1;
    }

    get token() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

}

export default LocalStorage;