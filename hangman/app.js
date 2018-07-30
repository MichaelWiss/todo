const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage


window.addEventListener('keypress', (e) => {
	const guess = String.fromCharCode(e.charCode)
	game1.makeGuess(guess)
	puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
})

getPuzzle('2',).then((puzzle) => {
    console.log(puzzle)
}, (err) => {
   console.log(`Error: ${err}`)
})

getCountry('US').then((country) => {
       console.log(`Country name: ${country.name}`)
	}, (err) => {
	console.log(`Error: ${err}`)
})





// const request = new XMLHttpRequest() 

// request.addEventListener('readystatechange', (e) => {
// 	if (e.target.readyState === 4 && e.target.status === 200) {
// 		const data = JSON.parse(e.target.responseText)
// 		console.log(data)
// 	} else if (e.target.readyState === 4) {
// 		console.log('An error has taken place')
// 	}
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
// request.send()


