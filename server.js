const express = require('express');
const app = express();
const cool = require('cool-ascii-faces');
const { Pool } = require("pg"); 
const bodyParser = require('body-parser'); 

const connectionString = process.env.DATABASE_URL || "postgres://kyqsvxntadtknr:3e889cae426990eff6d8cdd7fdf8924ee8821e88fd9baa08e007d5d59eb65fe5@ec2-18-209-187-54.compute-1.amazonaws.com:5432/d6bagnvea9jcap?ssl=true";

const pool = new Pool({connectionString: connectionString});

app.set('view engine', 'ejs');
app.set("port", (process.env.PORT || 5000));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", getDetails);
// app.get("/", getIngredient);

app.post("/", postDetails);
// app.post("/", postIngredient);

app.get("/cool", (req, res) => res.send(cool()));

app.get('/getPerson', getPerson);
//var ms = require('./mathService');

app.listen(app.get("port"), function() {
  console.log("Now listening on port: ", app.get("port"));
});
//__________________________________________________
function getDetails(req, res) {
  console.log("Getting details");
  res.render('result', { title: '', instructions: '', servings: '', rnotes: '',
                         amount: '', measure: '', item: '', inotes: ''});
}
// function getIngredient(req, res) {
// 	console.log("Getting ingredient");  
// 	res.render('result', { item: '', amount: '', measure: '', inotes: ''});
//   }

function postDetails(req, res) {
  console.log("Posting details");
  console.log(req.body.title);
  console.log(req.body.instructions);
  console.log(req.body.servings);
  console.log(req.body.rnotes);
  console.log(req.body.amount);
  console.log(req.body.measure);
  console.log(req.body.item);
  console.log(req.body.inotes);
  
  //var result = ms.computeOperation(req.body.sign, req.body.var1, req.body.var2);
  //console.log(result);
  res.render('result', { title:       req.body.title, 
						 instructions:req.body.instructions, 
						 servings:    req.body.servings, 
						 rnotes:      req.body.rnotes,						  
						 amount:      req.body.amount, 
						 measure:     req.body.measure,
						 item:        req.body.item, 
						 inotes:      req.body.inotes});
}
// function postIngredient(req, res) {
// 	console.log("Posting ingredient");
// 	console.log(req.body.item);
// 	console.log(req.body.amount);
// 	console.log(req.body.measure);
// 	console.log(req.body.inotes);
	
// 	//var result = ms.computeOperation(req.body.sign, req.body.var1, req.body.var2);
// 	//console.log(result);
// 	res.render('result', { item:   req.body.item, 
// 						   amount: req.body.amount, 
// 						   measure:req.body.measure, 
// 						   inotes: req.body.inotes});
//   }
//________________________________________________
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
	 var sql = "SELECT userID, firstName, lastName FROM cooks WHERE userID = $1::int";

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