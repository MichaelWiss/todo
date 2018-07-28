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

const request = new XMLHttpRequest() 

request.addEventListener('readystatechange', (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText)
		console.log(data)
	} else if (e.target.readyState === 4) {
		console.log('An error has taken place')
	}
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

const countryCode = "US"
const requestCountry = new XMLHttpRequest()

requestCountry.addEventListener('readystatechange', (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText)
		const country = data.find((country) => country.alpha2Code === countryCode)
		console.log(country.name)
	}
})

requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
requestCountry.send()
