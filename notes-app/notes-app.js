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

document.querySelector('#create-note').addEventListener('click', function(e) {
	e.target.textContent = 'The button was clicked'
})

document.querySelector('#remove-all').addEventListener('click', function () {
	document.querySelectorAll('.note').forEach(function(note) {
	  note.remove()
  })
})

document.querySelector('#search-text').addEventListener('input', function(e) {
   console.log(e.target.value)
})
