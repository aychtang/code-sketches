
	// Type definitions.
	class TodoList {
		todos: Todo[];

		constructor () {
			this.todos = [];
		}

		add(todo : Todo) {
			this.todos.push(todo);
		}
	}

	interface Todo {
		task: string;
		done: boolean;
	}

	// Helper methods.
	function clearElement(el) {
		el.innerHTML = '';
	}

	function clearInput(el) {
		el.value = '';
	}

	function renderItem(el, item : Todo) {
		var newNode = document.createElement('li');
		newNode.innerText = item.task;
		el.appendChild(newNode);
	}

	function renderList(list : TodoList) {
		var listEl = document.getElementById('list');
		clearElement(listEl);
		list.todos.forEach(function(item : Todo) {
			renderItem(listEl, item);
		});
	}

	// Event handlers.

	// Reference to input element casted to correct type,
	// the standard HTML Element type does not have a 'value' property.
	var inputEl = <HTMLInputElement>document.getElementById('todo-input');

	// Add button handler.
	document.getElementById('add-button').addEventListener('click', function(e) {
		list.add({task: inputEl.value, done: false});
		clearInput(inputEl);
		renderList(list);
	});

	// Initalisation code.
	var list = new TodoList();
	list.add({task:'hello mom', done:false});
	renderList(list);
