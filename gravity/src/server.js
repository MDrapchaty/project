var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.json({healthy: true})
});

app.listen(3000, function(){
	console.log("Server is running on Port 3000.");
});