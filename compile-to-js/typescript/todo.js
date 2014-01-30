// Type definitions.
var TodoList = (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.add = function (todo) {
        this.todos.push(todo);
    };

    TodoList.prototype.find = function (item) {
        return this.todos.filter(function (i) {
            return i.task === item;
        });
    };

    // Toggles done property of todo item.
    TodoList.prototype.toggle = function (todo) {
        todo.done = !todo.done;
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
    newNode.className = item.done ? 'completed' : 'incomplete';
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

// Helper function that types
function getTarget(event) {
    return event.target;
}

// List container handler, toggles target model done value and rerenders list.
document.getElementById('list').addEventListener('click', function (e) {
    var target = getTarget(e);
    list.toggle(list.find(target.innerText)[0]);
    renderList(list);
});

// Initalisation code.
var list = new TodoList();
list.add({ task: 'hello mom', done: false });
renderList(list);
