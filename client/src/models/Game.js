var Game = function() {
	this.players = [];
}

Game.prototype = {
	addPlayer: function( player ) {
		this.players.push( player );
	}
}

module.exports = Game;