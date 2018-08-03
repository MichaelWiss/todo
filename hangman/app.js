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

const startGame = async () => {
	
}

getPuzzle('2',).then((puzzle) => {
    console.log(puzzle)
}).catch((err) => {
  console.log(`Error: ${err}`)
})

// getCurrentCountry().then((country) => {
// 	console.log(country.name)
// }).catch((error) => {
// 	console.log(error)
// })

// getCountry('MX').then((country) => {
//        console.log(`Country name: ${country.name}`)
// 	}).catch((err) => {
//      console.log(`Error: ${err}`)
// })

// getLocation().then((location) => {
// 	return getCountry(location.country)
// }).then((country) => {
//    console.log(country.name)
// }).catch((err) => {
// 	console.log(`Error: ${err}`)
// })	

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//    if (response.status === 200) {
//        return response.json()
//    } else {
//    	  throw new Error('Unable to fetch the puzzle')
//    }
// }).then((data) => {
//     console.log(data.puzzle)
// }).catch((error) => {
//     console.log(error)
// })





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


