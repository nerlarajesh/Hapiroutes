var Hapi = require('hapi');
var inert = require('inert');
var handlebar = require('handlebars');
var vision = require('vision');
var routes = require('./custom-routes');
var server = new Hapi.Server();
server.connection({
    port: 8080,
    host: 'localhost'
})
server.register([
    { register: vision },
    { register: inert },
    { register: routes }

])
server.views({
    engines: {
        hbs: handlebar
    },
    path: __dirname + '/views'
})
server.start(function(err) {
    console.log('Server runnning at: ' + server.info.uri)
})