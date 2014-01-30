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
function clearElement(el) {
    el.innerHTML = '';
}

function clearInput(el) {
    el.value = '';
}

function renderItem(el, item) {
    var newNode = document.createElement('li');
    newNode.innerText = item.task;
    el.appendChild(newNode);
}

function renderList(list) {
    var listEl = document.getElementById('list');
    clearElement(listEl);
    list.todos.forEach(function (item) {
        renderItem(listEl, item);
    });
}

// Event handlers.
// Reference to input element casted to correct type,
// the standard HTML Element type does not have a 'value' property.
var inputEl = document.getElementById('todo-input');

// Add button handler.
document.getElementById('add-button').addEventListener('click', function (e) {
    if (inputEl.value.length) {
        list.add({ task: inputEl.value, done: false });
        clearInput(inputEl);
        renderList(list);
    }
});

// Initalisation code.
var list = new TodoList();
list.add({ task: 'hello mom', done: false });
renderList(list);
