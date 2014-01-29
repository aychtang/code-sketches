var TodoList = (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.add = function (todo) {
        this.todos.push(todo);
    };
    return TodoList;
})();

function getTask(todo) {
    return todo.task;
}

function renderItem(el, item) {
    var newNode = document.createElement('li');
    newNode.innerText = item.task;
    el.appendChild(newNode);
}

function renderList(list) {
    list.todos.forEach(function (item) {
        renderItem(document.getElementById('list'), item);
    });
}

var list = new TodoList();
list.add({ task: 'hello mom', done: false });
renderList(list);
