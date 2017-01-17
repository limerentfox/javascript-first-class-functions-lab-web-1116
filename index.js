function countdown(callback) {
	window.setTimeout(callback, 2000)
}

function createMultiplier(num) {
	
		return function(num2) {
			return num * num2
		}
	
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(x, y) {
	return x * y
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)