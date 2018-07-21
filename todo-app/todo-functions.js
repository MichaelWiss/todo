console.log(uuidv4())


// Fetch existing todos from localStorage
const getSavedTodos = () => {
	const todosJSON = localStorage.getItem('todos')
     return todosJSON ? JSONparse(todosJSON) : []

 //     if (todosJSON !== null) {
 //        return JSON.parse(todosJSON)
 // } else {
 // 	return []
 // }
} 

// Save todos to localStorage
const savedTodos = (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
	const todoIndex = todos.findIndex((todo) => todo.id === id)
	if (todoIndex > -1) {
		todos.splice(todoIndex, 1)
	}
}


// Toggle the completed value for a given todo
const toggleTodo = (id) => {
	const todo = todos.find((todo) => todo.id === id)
    
	if (todo) {
		todo.completed = !todo.completed
	}
}



const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed


        return searchTextMatch && hideCompletedMatch
    })


    //     if (filters.hideCompleted) {
    //        return !todo.completed 
    //     } else {
    //         return true
    //     }
    

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

   filteredTodos.forEach((todo) => {
    
    document.querySelector('#todos').appendChild(generateTodoDOM(todo))
  })
}


// Get the Dom elements for an individual note
const generateTodoDOM = (todo) => {
	const todoEl = document.createElement('div')
	const checkbox = document.createElement('input')
	const todoText = document.createElement('span')
	const removeButton = document.createElement('button')

    // setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('change', () => {
    	toggleTodo(todo.id)
    	savedTodos(todos)
    	renderTodos(todos, filters)
    })

    // Setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // Setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
    	removeTodo(todo.id)
    	savedTodos(todos)
    	renderTodos(todos, filters)
    })


	return todoEl
}

const generateSummaryDOM =(incompleteTodos) => {
      const summary = document.createElement('h2')
      summary.textContent = `You have ${incompleteTodos.length} todos left`
      return summary
}