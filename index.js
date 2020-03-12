const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/",function(req,res) {
	console.log("started the landing page");
});
		


// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
});


function sayHello(req,res) {
	console.log("Received a request for: " + req.url);
    var request = req.url;
	if (request == '/home') 
		{
		  res.write("Welcome to the Home Page");
		  res.end();
		} else
	if (request == '/getData') 
		{
		  res.write("Name:  Sister Delorey" + "\n");
		  res.write("Class: CS313-03");
		  res.end();
		}  
		else
		{
		  res.write("404:Page Not Found");
		  res.end();
		}  		
}

