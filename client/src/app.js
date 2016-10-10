var tmi = require( 'tmi.js' );
var Calculator = require( './models/Calculator' );
var Cards = require( './models/Cards' );

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

var client = new tmi.client(options);

client.connect();

client.on( 'connected', function( address, port ) {
    client.action( "skinnypigeon I am connected to your chat" );
})

// client.on( 'chat', function( channel, user, message, self ) {
//     var calc = new Calculator();
//     calc.sum( message );
//     var answer = calc.equals();
//     client.action( "skinnypigeon", answer );
//     console.log( answer );
// });

// client.on( 'chat', function( channel, user, message, self ) {
//     var pack = new Cards();
//     var card1 = pack.deal();
//     var card2 = pack.deal();
//     var cards = card1 + card2;

//     client.action( "skinnypigeon", cards );
// });

client.on("message", function (channel, userstate, message, self) {
    if (self) return;
    
    switch(userstate["message-type"]) {
        case "action":
            break;
        case "chat":
            if( message === "!deal" ) {
                var pack = new Cards();
                var card1 = pack.deal();
                var card2 = pack.deal();
                var cards = card1 + card2;

                client.action( "skinnypigeon", cards );
        }
            break;
        case "whisper":
            break;
        default:
            break;
    }
});