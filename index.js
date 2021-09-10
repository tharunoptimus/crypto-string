const crypto = require("crypto") // import the crypto module.

module.exports = function getRandomCode(length = 6) {

	const characters =
		"AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzaAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0918273645546372819".split(
			""
		)

    return generateForCustomCharacters(length, characters)
}

function generateForCustomCharacters(length, characters) {
	const characterCount = characters.length
	const maxValidSelector =
		Math.floor(0x10000 / characterCount) * characterCount - 1
	const entropyLength = 2 * Math.ceil(1.1 * length)
	let string = ""
	let stringLength = 0

	while (stringLength < length) {
		const entropy = crypto.randomBytes(entropyLength)
		let entropyPosition = 0

		while (entropyPosition < entropyLength && stringLength < length) {
			const entropyValue = entropy.readUInt16LE(entropyPosition)
			entropyPosition += 2
			if (entropyValue > maxValidSelector) {
				continue
			}

			string += characters[entropyValue % characterCount]
			stringLength++
		}
	}

	return string
}
