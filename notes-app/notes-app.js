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

const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
   p.textContent = '*******'
})

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph)