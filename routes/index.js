module.exports = function(app, path) {
    // app passes in the express object needed for the route.
    // path passes in a path object needed to find the file. 
    //The path module is part of node and needs to be required in the server.js file

    app.get('/', function(req, res) {
        let filepath = path.resolve('./www/index.html');
        res.sendFile(filepath);
    });

    var bodyParse = require('body-parser');
    app.use(bodyParse.json());

    app.post('/login', function(req, res) {
        let users = [
            { 'email': 'abc@com.au', 'pwd': '123' },
            { 'email': 'abd@com.au', 'pwd': '123' },
            { 'email': 'abe@com.au', 'pwd': '123' }
        ];

        if (!req.body) {
            return res.sendStatus(400);
        }

        var customer = {};
        customer.email = req.body.email;
        customer.upwd = req.body.upwd;

        var reqJson = {
            "ok": false,
            "errors": "User credentials do not match"
        };

        for (let i = 0; i < users.length; i++) {
            if (customer.email == users[i].email && customer.upwd == users[i].pwd) {
                reqJson = { "ok": true };
            }
        }
        res.send(reqJson);
    });
}