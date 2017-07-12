var routes = {
    register: function(server, options, next) {
        server.route([{
                method: 'GET',
                path: '/',
                handler: function(request, reply) {
                reuqest.payload
                    reply.view('index', { message: 'Hello World' })
                }
            },
            {
                method: 'GET',
                path: '/css/{file}',
                handler: {
                    directory: {
                        path: 'css',
                        listing: true
                    }
                }
            }
        ])
        next() //it means continue the next work flows 
    }
}
routes.register.attributes = {
    name: 'custom-routes',
    version: '2.0.0'
}
module.exports = routes;