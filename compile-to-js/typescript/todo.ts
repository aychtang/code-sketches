
	interface Todo {
		task: string;
		done: boolean;
	}

	function getTask(todo : Todo) {
		return todo.task;
	}

	console.log(
		getTask({task:'hello world', done:false})
	);
