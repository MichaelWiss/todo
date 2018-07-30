const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
      const request = new XMLHttpRequest() 

  request.addEventListener('readystatechange', (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText)
		resolve(data.puzzle)
	} else if (e.target.readyState === 4) {
		reject('An error has taken place')
	}
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()
})

const getCountry = (countryCode, callback) => {
    const requestCountry = new XMLHttpRequest()

    requestCountry.addEventListener('readystatechange', (e) => {
	if (e.target.readyState === 4 && e.target.status === 200) {
		const data = JSON.parse(e.target.responseText)
		const country = data.find((country) => country.alpha2Code === countryCode)
		callback(undefined, country)
	} else if (e.target.readyState ===4) {
		callback('Unable to fetch data')
	}
})

requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all')
requestCountry.send()
}