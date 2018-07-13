const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const filters = {
     searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })

    document.querySelector('#todos').innerHTML = ''

   const summary = document.createElement('h2')
   summary.textContent = `You have ${incompleteTodos.length} todos left`
   document.querySelector('#todos').appendChild(summary)

   filteredTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('#todos').appendChild(p)
  })
}


renderTodos(todos, filters)

// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

// document.querySelector('#create-todo').addEventListener('click', function(e) {
//     console.log('add a new todo')
// })

// document.querySelector('#new-todo-text').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })



document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    })

document.querySelector('#todo-form').addEventListener('submit', function(e) {
    e.preventDefault()
    todos.push({
    todo: e.target.elements.todo.value,
    completed: false
    })
    renderTodos(todos, filters)
    e.target.elements.text.value = '' 
})


