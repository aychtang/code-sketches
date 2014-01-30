
	// Type definitions.
	class TodoList {
		todos: Todo[];

		constructor() {
			this.todos = [];
		}

		add(todo : Todo) {
			this.todos.push(todo);
		}

		find(item : string) {
			return this.todos.filter(function(i) {
				return i.task === item;
			});
		}

		// Toggles done property of todo item.
		toggle(todo: Todo) {
			todo.done = !todo.done;
		}
	}

	// Should add uid.
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
		newNode.className = item.done ? 'completed' : 'incomplete';
		el.appendChild(newNode);
	}

	function renderList(list : TodoList) {
		var listEl = document.getElementById('list');
		clearElement(listEl);
		list.todos.forEach(function(item : Todo) {
			renderItem(listEl, item);
		});
	}

	// Returns target of an event as a HTMLElement.
	function getTarget(event : Event) {
		return <HTMLElement> event.target;
  }

	// Event handlers.

	// Reference to input element casted to correct type,
	// the standard HTML Element type does not have a 'value' property.
	var inputEl = <HTMLInputElement> document.getElementById('todo-input');

	// Add button handler.
	document.getElementById('add-button').addEventListener('click', function(e) {
		if (inputEl.value.length) {
			list.add({task: inputEl.value, done: false});
			clearInput(inputEl);
			renderList(list);
		}
	});

	// List container handler, toggles target model done value and rerenders list.
	document.getElementById('list').addEventListener('click', function(e) {
		var target = getTarget(e);
		list.toggle(list.find(target.innerText)[0]);
		renderList(list);
	});

	// Initalisation code.
	var list = new TodoList();
	list.add({task:'hello mom', done:false});
	renderList(list);
