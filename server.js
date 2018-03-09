//Cookie example code: https://www.npmjs.com/package/cookie

// grab the packages we need
var cookie = require('cookie');
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// routes will go here
app.get('/', function(req, res) {
	res.sendfile('iLoveNewsFP.html')
})


app.get('/login/', function(req, response) {
	var u = req.query.uname;
	var p = req.query.pass;

	response.setHeader('Set-Cookie', cookie.serialize('username', String(u), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week 
    }));
	
	response.end();
});

app.get('/create/', function(req, res) {
	var u = req.query._uname;
	var p = req.query._pass;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("news");
		var myobj = { username: u, pass: p };
		dbo.collection("users").insertOne(myobj, function(err, res) {
			if (err) 
			{
				throw err;
				db.close;
				res.send("Error. Account not created.");
			}
			else 
			{
				console.log("1 document inserted.");
				db.close;
				res.send("Account successfully created.");
			}
		});
	});
	res.send(response);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);*/



/*// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// routes will go here
app.get('/', function(req, res) {
	res.sendfile('../CSS/main_style.css')
})
app.get('/', function(req, res) {
	res.sendfile('../iLoveNewsFP.html')
});
app.get('/', function(req, res) {
	res.sendfile('login_events.js')
});


app.get('/create/', function(req, res) {
	var u = req.query._uname;
	var p = req.query._pass;

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("news");
		var myobj = { username: u, pass: p };
		dbo.collection("users").insertOne(myobj, function(err, res) {
			if (err) 
			{
				throw err;
				db.close;
				res.send("Error. Account not created.");
			}
			else 
			{
				console.log("1 document inserted.");
				db.close;
				res.send("Account successfully created.");
			}
		});
	});
	res.send(response);
});

app.get('/login/', function(req, res) {
	var u = req.query._uname;
	var p = req.query._pass;
	var response = "Error. Username or password not in DB.";

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("news");
		var query = { username: u };
		dbo.collection("users").find(query).toArray(function(err, result) {
			if (err) throw err;
			console.log(result);
			if(result[0].pass == p) {
				response = "Successfully logged in.";
			}
			db.close();
		});
	});

	res.send(response);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);*/