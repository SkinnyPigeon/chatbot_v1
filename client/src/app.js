var tmi = require( 'tmi.js' );


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

var chat;

client.connect();

client.on( 'connected', function( address, port ) {
	client.action( "skinnypigeon I am connected to your chat" );
	chat = new Chat();
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
			chat.start( userstate );
			break
		case "!join":
			chat.join( userstate, words[1] );
			break
		case "!play":
			chat.play( client, userstate )
			break
		case "!deal":
			chat.deal();
			break
		case "!state":
			chat.state();
			break
		default:
			break
	}
};