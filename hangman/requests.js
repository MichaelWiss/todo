const getPuzzle = async (wordCount) => {
	const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
	
	if (response.status === 200) {
      const data = await response.json()
      return data.puzzle
	} else {
		throw new Error('Unable to get puzzle')
	}
}



const getCountry = async (countryCode) => {
	const countryResponse = await fetch('http://restcountries.eu/rest/v2/all').then((response) => {
		if (response.status === 200) {
			const countryData = await response.json()
           return countryData.json()
		} else {
			throw new Error('Unable to fetch data ')
		}
	}).then((countryData) => {
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


    
