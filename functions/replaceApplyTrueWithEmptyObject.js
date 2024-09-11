export const replaceApplyTrueWithEmptyObject = (obj) => {
	for (const key in obj) {
		if (typeof obj[key] === "object") {
			// Recursively traverse the object
			replaceApplyTrueWithEmptyObject(obj[key])
		}

		// Check for @apply rules and replace true with {}
		if (key.startsWith("@apply") && obj[key] === true) {
			obj[key] = {}
		}
	}
}
