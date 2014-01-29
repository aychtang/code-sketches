
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

	function getTask(todo : Todo) {
		return todo.task;
	}

	function renderItem(el, item: Todo) {
		var newNode = document.createElement('li');
		newNode.innerText = item.task;
		el.appendChild(newNode);
	}

	function renderList(list: TodoList) {
		list.todos.forEach(function(item: Todo) {
			renderItem(document.getElementById('list'), item);
		});
	}

	var list = new TodoList();
	list.add({task:'hello mom', done:false});
	renderList(list);
