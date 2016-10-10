var tmi = require("tmi.js");

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
    channels: ['skinnypigeon']
};

var client = new tmi.client(options);

client.connect();

client.on( 'chat', function( channel, user, message, self ) {
    client.action( "skinnypigeon", user[ 'display-name' ] + " I am connected to your chat" );
});