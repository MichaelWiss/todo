const notes = getSavedNotes()
// const el = document.querySelector('p');
// el.remove();

// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//    p.textContent = '*******'
// })

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from Javascript'
// document.querySelector('body').appendChild(newParagraph)

const filters = {
	searchText: ''
}




//localStorage.setItem('location', 'New York')
// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

// localStorage.clear

// const user = {
// 	name: 'Michael',
// 	age: 36
// }
// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// // localStorage.setItem('user', userJSON)
// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// // console.log(`${user.name} is ${user.age}`)




renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
	notes.push({
		title: '',
		body: ''
	})
	savedNotes(notes)
	renderNotes(notes, filters)
})




// document.querySelector('#remove-all').addEventListener('click', function () {
// 	document.querySelectorAll('.note').forEach(function(note) {
// 	  note.remove()
//   })
// })

document.querySelector('#search-text').addEventListener('input', function(e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

// document.querySelector('#name-form').addEventListener('submit', function(e) {
// 	e.preventDefault()
// 	console.log(e.target.elements.firstName.value)
// 	e.target.elements.firstName.value = ''
// })

// document.querySelector('#for-fun').addEventListener('change', function(e) {
// 	console.log(e.target.checked)
// })

document.querySelector('#filter-by').addEventListener('change', function (e) {
	console.log(e.target.value)
})






