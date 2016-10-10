var tmi = require( 'tmi.js' );
var Calc = require( './src/calc' );

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true
    },
    identity: {
        username: "robobleepbloop",
        password: "oauth:if3e2ziho9n2bdoy053vie45w2g1t3"
    },
    channels: [ 'skinnypigeon' ]
};

var client = new tmi.client(options);

client.connect();

client.on( 'connected', function( address, port ) {
    client.action( "skinnypigeon I am connected to your chat" );
})

client.on( 'chat', function( channel, user, message, self ) {
    var calc = new Calc();
    var answer = calc.multi();
    // client.action( "skinnypigeon", user[ 'display-name' ] + " I am connected to your chat" );
    client.action( "skinnypigeon", answer );
});