var tmi = require( 'tmi.js' );

var Cards = require( './models/Cards' );
var Game = require( './models/Game' );

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
	console.log( userstate );
	switch( message ) {
		case "!play":
			play( userstate )
		case "!deal":
			deal();
			break
		default:
			break
	}
};

var deal = function() {
	var pack = new Cards;
	var card1 = pack.deal();
	var card2 = pack.deal();
	var cards = card1 + card2;

	client.action( "skinnypigeon", cards );
}












