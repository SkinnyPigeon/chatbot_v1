var Cards = require( './Cards' );
var Game = require( './Game' );
var Player = require( './Player' );

var Chat = function() {
  this.games = [];
}

Chat.prototype = {
  
  start: function( userstate ) {
    var name = userstate[ 'username' ];
    var player = new Player( name );
    var pack = new Cards;
    var game = new Game( pack );

    game.id = name;
    game.addPlayer( player );
    this.games.push( game );
  },

  join: function( userstate, friendsName ) {
    var name = userstate[ 'username' ];
    for( var i = 0; i < this.games.length; i++ ) {
      for( var j = 0; j < this.games[i].players.length; j++ ) {
        if( this.games[i].players[j].name.toLowerCase() === friendsName.toLowerCase() ) {
          var player = new Player( name );
          this.games[i].addPlayer( player );
        }
      }
    }
  },

  play: function( client, userstate ) {
    var name = userstate[ 'username' ];
    for( var i = 0; i < this.games.length; i++ ) {
      for( var j = 0; j < this.games[i].players.length; j++ ) {
        if( this.games[i].players[j].name === name ) {
          var card1 = this.games[i].cards.deal();
          var card2 = this.games[i].cards.deal();
          this.games[i].players[j].getCard( card1 );
          this.games[i].players[j].getCard( card2 );
          client.whisper( userstate[ 'username' ], this.games[i].players[j].hand );
        }
      }
    }
  },

  state: function() {
    console.log( this.games[0].players[0].hand );
    console.log( this.games[1].players[0].hand );
  },

}

module.exports = Chat;