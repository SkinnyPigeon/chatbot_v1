var _ = require( 'lodash' );

var Cards = function() {
	this.cards = [ "A♠️ ", "A♥️ ", "A♣️ ", "A♦️ " ];
	this.shuffle();
}

Cards.prototype = {

	shuffle: function() {
		this.cards = _.shuffle( this.cards );
	},

	deal: function() {
		var card = this.cards.splice( 0, 1 );
		return card;
	}
}

module.exports = Cards;