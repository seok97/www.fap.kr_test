const proxy = require('http-proxy-middleware');

// proxy 설정 react(client)와 node(server)를 연동하기위함.
module.exports = function(app){
    app.use(
        proxy('/users',{
            target:'http://localhost:3002/'
        })
    );
};