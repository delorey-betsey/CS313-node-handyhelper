const express = require('express');
const app = express();

const { Pool } = require("pg");  

const connectionString = process.env.DATABASE_URL || "postgres://kyqsvxntadtknr:3e889cae426990eff6d8cdd7fdf8924ee8821e88fd9baa08e007d5d59eb65fe5@ec2-18-209-187-54.compute-1.amazonaws.com:5432/d6bagnvea9jcap?ssl=true";

const pool = new Pool({connectionString: connectionString});

app.set('port', (process.env.PORT || 5000));
// app.use(express.static(__dirname + '/public'));

app.get('/getPerson', getPerson);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


function getPerson(request, response) {
	console.log("Got it: ");
	var id = request.query.id;
	console.log("Retrieving person with id: ", id); 

	getPersonFromDB(id, function(error, result) {
		console.log("Back from the database with results:", result);
		response.json(result);
	});
}

function getPersonFromDB(id, callback) {
     console.log("Back from the getPersonFromDB function with the results: " + id);

	 //var result = {id: 444, first: "Betsey", last: "Delorey", birthdate: "1954-12-16"};
	 var sql = "SELECT userID, firstName, lastName FROM cooks WHERE id = $1::int";

     var params = [id];

	pool.query(sql, params, function(err, result) {
	
		if (err) {
			console.log("Error with database occurred. ")
			console.log(err);
			callback(err, null);
		}

     	console.log("Found db result: " + JSON.stringify(result.rows));

		callback(null, result.rows);
	});
} 