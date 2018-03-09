//Cookie example code: https://www.npmjs.com/package/cookie

// grab the packages we need
var cookie = require('cookie');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// routes will go here
app.get('/login/', function(req, response) {
	var u = req.query.uname;
	var p = req.query.pass;

	response.setHeader('Set-Cookie', cookie.serialize('username', String(u), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week 
    }));
	
	response.end();
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);