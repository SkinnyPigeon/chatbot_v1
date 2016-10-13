var Logic = function( cards ) {
  this.cards = cards;
  this.total = 0;
  this.aceHigh = 0;
  this.aceLow = 0;
}

Logic.prototype = {

  handleAces: function() {
    for( var i = 0; i < this.cards.length; i++ ) {
      if( this.cards[i].chatAt(0) === "A" ) {
        this.aceHigh = 11;
        this.aceLow = 1;
      }
    }
  },

  score: function( card ) {
    switch( card ) {
      case "2":
      this.total += 2;
      break
    }
  }
}

module.exports = Logic;