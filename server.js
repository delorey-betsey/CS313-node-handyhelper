require('dotenv').config();
const connectionString = process.env.DATABASE_URL;
const express = require('express');
const app = express();
const port = process.env.PORT || 5432; 

// tell it to use the public directory as one where static files live
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/",function(req,res) {
	console.log("started the landing page");
	res.render("form");
});

app.get('/result', showResult);

function showResult(request, response) {
	var sql = "SELECT * FROM some_table_here";
	pool.query(sql, function(err, result) {
		// If an error occurred...
		if (err) {
			console.log("Error in query: ")
			console.log(err);
		}
		// Log this to the console for debugging purposes.
		console.log("Back from DB with result:");
		console.log(result.rows);
	}); 
}
// start the server listening
app.listen(port, function() {
  console.log('Node app is running on port', port);
});



