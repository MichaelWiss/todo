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

	if (isUnique && ) {

	}
}



const game1 = new Hangman('Cat', 2)
console.log(game1)

const game2 = new Hangman('New Jersey', 4)
console.log(game2)