'use strict'


function makeId(length = 6) {
	var id = ''
	var possible = '0123456789'

	for (var i = 0; i < length; i++) {
		id += possible.charAt(getRandomInt(0, possible.length))
	}

	return id
}

