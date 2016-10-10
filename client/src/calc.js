var Calc = function() {
	this.answer = 0;
}

Calc.prototype = {
	multi: function() {
		return ( 2 * 2 )
	}
}

module.exports = Calc;