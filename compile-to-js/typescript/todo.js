// Type definitions.
var TodoList = (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.add = function (todo) {
        this.todos.push(todo);
    };
    return TodoList;
})();

// Helper methods.
function renderItem(el, item) {
    var newNode = document.createElement('li');
    newNode.innerText = item.task;
    el.appendChild(newNode);
}

function renderList(list) {
    var listEl = document.getElementById('list');
    list.todos.forEach(function (item) {
        renderItem(listEl, item);
    });
}

// Initalisation code.
var list = new TodoList();
list.add({ task: 'hello mom', done: false });
renderList(list);
