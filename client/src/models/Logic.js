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

  setScore: function( card ) {
    this.total = 0;
    switch( card ) {
      case "2":
        this.total += 2;
        break
      case "3":
        this.total += 3;
        break
      case "4":
        this.total += 4;
        break
      case "5":
        this.total += 5;
        break
      case "6":
        this.total += 6;
        break
      case "7":
        this.total += 7;
        break
      case "8":
        this.total += 8;
        break
      case "9":
        this.total += 9;
        break
      case "1":
        this.total += 10;
        break
      case "J":
        this.total += 10;
        break
      case "Q":
        this.total += 10;
        break
      case "K":
        this.total += 10;
        break
    }
  }
}

module.exports = Logic;