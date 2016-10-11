var Chat = function( message, userstate ) {
  this.message = message;
  this.userstate = userstate;
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

  join: function() {
    var name = userstate[ 'username' ];
    for( var i = 0; i < games.length; i++ ) {
      for( var j = 0; j < games[i].players.length; j++ ) {
        if( games[i].players[j].name.toLowerCase() === friendsName.toLowerCase() ) {
          var player = new Player( name );
          games[i].addPlayer( player );
        }
      }
    }
  },

}

module.exports = Chat;