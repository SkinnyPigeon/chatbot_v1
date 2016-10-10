var _ = require( 'lodash' );

var Cards = function() {
	this.cards = [ "1♠️ ", "1♥️ ", "1♣️ ", "1♦️ " ];
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