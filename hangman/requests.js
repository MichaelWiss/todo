const getPuzzle = async (wordCount) => {
	const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
	
	if (response.status === 200) {

	} else {
		
	}
}



const getCountry = (countryCode) => {
	return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
		if (response.status === 200) {
           return response.json()
		} else {
			throw new Error('Unable to fetch data ')
		}
	}).then((data) => {
		return country = data.find((country) => country.alpha2Code === countryCode)
  })
}

const getLocation = () => {
	return fetch('http://ipinfo.io/json?token=a0ee1b5b3dc541').then((response) => {
		if (response.status ===200) {
			return response.json()
		} else {
			throw new Error('Unable to fetch location')
		}
	})
}


    
