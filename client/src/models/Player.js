var Player = function( name ) {
  this.name = name;
  this.chips = 500;
  this.hand = [];
  this.bet = 0;
}

Player.prototype = {
  getCard: function( card ) {
    this.hand.push( card )
  },

  placeBet: function( bet ) {
    this.bet = bet;
    this.chips -= this.bet;
    return this.bet;
  }
}

module.exports = Player;