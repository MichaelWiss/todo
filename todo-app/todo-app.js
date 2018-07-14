let todos = []

const filters = {
     searchText: '',
     hideCompleted: false
}

const todosJSON = localStorage.getItem('todos')
     
     if (todosJSON !== null) {
        todos = JSON.parse(todosJSON)
 }



const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed


        return searchTextMatch && hideCompletedMatch
    })


    //     if (filters.hideCompleted) {
    //        return !todo.completed 
    //     } else {
    //         return true
    //     }
    

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

document.querySelector('#create-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
       text: e.target.elements.todo.value,
       completed: false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
    renderTodos(todos, filters)
    e.target.elements.todo.value = '' 
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
   filters.hideCompleted = e.target.checked
   renderTodos(todos, filters)
})












