const Hangman = function (word, remainingGuesses) {
	this.word = word.toLowerCase().split('')
	this.remainingGuesses = remainingGuesses
	this.guessedLetters = ['c']
}

Hangman.prototype.getPuzzle = function () {
	let puzzle = ''
    
    this.word.forEach((letter) => {
    	if (this.guessedLetters.includes(letter) || letter === ' ') {
          puzzle += letter
    	} else{
           puzzle += '*'
    	}
    })

	return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
	guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
	if (isUnique) {
		this.guessedLetters.push(guess)
	}

	if (isUnique && isBadGuess) {
		this.remainingGuesses--

	}
}

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')

const game1 = new Hangman('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses 

window.addEventListener('keypress', function (e) {
	const guess = String.fromCharCode(e.charCode)
	game1.makeGuess(guess)
	puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.remainingGuesses
})