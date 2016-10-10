var Game = function() {
  this.players = [];
  this.pot = 0;
}

Game.prototype = {
  addPlayer: function( player ) {
    this.players.push( player )
  },

  takeBet: function( player ) {
    this.pot += player.bet
  }, 
}

module.exports = Game;