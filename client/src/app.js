var tmi = require( 'tmi.js' );

var Cards = require( './models/Cards' );
var Game = require( './models/Game' );
var Player = require( './models/Player' );
var Chat = require( './models/Chat' );

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: 'aws',
		reconnect: true
	},
	identity: {
		username: "RoboBleepBloop",
		password: "oauth:if3e2ziho9n2bdoy053vie45w2g1t3"
	},
	channels: [ 'skinnypigeon' ]
};

var client = new tmi.client( options );

client.connect();

client.on( 'connected', function( address, port ) {
	client.action( "skinnypigeon I am connected to your chat" );
});

client.on( 'message', function( channel, userstate, message, self ) {

	if( self ) return;

	switch( userstate[ 'message-type' ]) {
		case "action":
			break;
		case "chat":
			playGame( message, userstate );
			break;
		case "whisper":
			break;
		default:
			break;
	}

});

var playGame = function( message, userstate ) {
	var words = message.split( " " );
	switch( words[0] ) {
		case "!start":
			start( userstate );
			break
		case "!join":
			join( userstate, words[1] );
			break
		case "!play":
			play( userstate )
			break
		case "!deal":
			deal();
			break
		case "!state":
			state();
			break
		default:
			break
	}
};

// var games = [];

// var start = function( userstate ) {
// 	var name = userstate[ 'username' ];
// 	var player = new Player( name );
// 	var pack = new Cards;
// 	var game = new Game( pack );

// 	game.id = name;
// 	game.addPlayer( player );
// 	games.push( game );
// };

// var join = function( userstate, friendsName ) {
// 	var name = userstate[ 'username' ];
// 	for( var i = 0; i < games.length; i++ ) {
// 		for( var j = 0; j < games[i].players.length; j++ ) {
// 			if( games[i].players[j].name.toLowerCase() === friendsName.toLowerCase() ) {
// 				var player = new Player( name );
// 				games[i].addPlayer( player );
// 			}
// 		}
// 	}
// };

// var play = function( userstate ) {
// 	var name = userstate[ 'username' ];
// 	for( var i = 0; i < games.length; i++ ) {
// 		for( var j = 0; j < games[i].players.length; j++ ) {
// 			if( games[i].players[j].name === name ) {
// 				var card1 = games[i].cards.deal();
// 				var card2 = games[i].cards.deal();
// 				games[i].players[j].getCard( card1 );
// 				games[i].players[j].getCard( card2 );
// 				client.whisper( userstate[ 'username' ], games[i].players[j].hand );
// 			}
// 		}
// 	}
// };

// var state = function() {
// 	console.log( games[0].players[0].hand );
// 	console.log( games[0].players[1].hand );
// }
