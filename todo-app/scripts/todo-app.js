'use strict'


let todos = getSavedTodos()

const filters = {
     searchText: '',
     hideCompleted: false
}

getSavedTodos()






renderTodos(todos, filters)



// You have 2 todos left (p element)
// Add a p for each todo above (use text value)

// document.querySelector('#create-todo').addEventListener('click', function(e) {
//     console.log('add a new todo')
// })

// document.querySelector('#new-todo-text').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })



document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
    })

document.querySelector('#create-todo').addEventListener('submit', (e) => {
    const text = e.target.elements.text.value.trim()
    e.preventDefault()

    if (text.lemgth > 0) {
       todos.push({
       id: uuidv4(), 
       text: text,
       completed: false
    })
    savedTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.todo.value = '' 
    }
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
   filters.hideCompleted = e.target.checked
   renderTodos(todos, filters)
})












