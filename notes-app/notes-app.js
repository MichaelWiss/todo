const notes = [{
    title: 'my next trip',
    body: 'I would like to go to China'
}, {
	title: 'habbits to work on',
	body: 'more reading.'
}, {
	title: 'Office',
	body: 'vacum'
}]
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

const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter(function (note) {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
	})

    document.querySelector('#notes').innerHTML = ''

	filteredNotes.forEach(function (note) {
		const noteEl = document.createElement('p')
		noteEl.textContent = note.title
		document.querySelector('#notes').appendChild(noteEl)
	})
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e) {
	e.target.textContent = 'The button was clicked'
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

document.querySelector('#name-form').addEventListnener('submit', function(e) {
	e.preventDefault()
	e.target.elements
})







