
	# Todo container and helpers.

	todoList = () ->
		@todos = []
		@

	todoList::add = (todo) ->
		@todos.push(todo)

	todoList::find = (item) ->
		@todos.filter (i) ->
			return i.task is item

	todoList::toggle = (todo) ->
		todo.done = !todo.done

	# Helpers.

	clearElement = (el) ->
		el.innerHTML = ''
		el.value = ''

	renderItem = (el, item) ->
		newNode = document.createElement 'li'
		newNode.innerText = item.task
		newNode.className = if item.done then 'completed' else 'incomplete'
		el.appendChild newNode

	renderList = (list) ->
		listEl = document.getElementById('list');
		clearElement listEl
		for item in list.todos
			renderItem listEl, item

	# Initialise list.
	window.list = new todoList()
	list.add {'task': 'hello mom', 'done': false}
	renderList list

	# Set handlers.

	inputEl = document.getElementById('todo-input');

	document.getElementById('add-button').addEventListener('click', (e) ->
		if inputEl.value.length
			list.add({
				'task': inputEl.value,
				'done': false
			})
			clearElement inputEl
			renderList list
	)

	document.getElementById('list').addEventListener('click', (e) ->
		list.toggle(list.find(e.target.innerText)[0])
		renderList(list)
	)
