
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
	function renderItem(el, item : Todo) {
		var newNode = document.createElement('li');
		newNode.innerText = item.task;
		el.appendChild(newNode);
	}

	function renderList(list : TodoList) {
		var listEl = document.getElementById('list')
		list.todos.forEach(function(item : Todo) {
			renderItem(listEl, item);
		});
	}

	// Initalisation code.
	var list = new TodoList();
	list.add({task:'hello mom', done:false});
	renderList(list);
