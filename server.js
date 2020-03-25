require('dotenv').config()
const express = require('express');
const path = require('path');
app.set("PORT", (process.env.PORT || 5000));
const url = require('url')
// const cool = require('cool-ascii-faces');
// const connectionString = process.env.DATABASE_URL;
// const { Pool } = require('pg');
// const pool = new Pool({connectionString: connectionString});
//// const connectionString = process.env.DATABASE_URL || "postgres://xeuolzgrfowtaq:6b8c8e22e66da68f1ef2e992c44f8c484f2a2f85ee874ad6f182ff673d27808b@ec2-18-206-84-251.compute-1.amazonaws.com:5432/d49k598khgjq6h?ssl=true";
//// postgres://xeuolzgrfowtaq:6b8c8e22e66da68f1ef2e992c44f8c484f2a2f85ee874ad6f182ff673d27808b@ec2-18-206-84-251.compute-1.amazonaws.com:5432/d49k598khgjq6h
const app = express();

const bodyParser = require('body-parser');

var session = require('express-session')
//set up sessions??
// app.use(session({
//   secret: 'my-secret-team-secret',
//   resave: false,
//   saveUninitialized: true
// }))

// app.use(express.static("public"));
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('result'));
app.get("/", getDetails);
app.post("/", postDetails);

//app.get("/cool", (req, res) => res.send(cool()));

app.get('/searchAllChefs', searchAllChefs);
app.get('/searchAllRecipes', searchAllRecipes);

app.post('/divideRecipe', divideRecipe);
app.post('/doubleRecipe', doubleRecipe);
app.post('/addRecipe', addRecipe);

//below three gets will not be used in final but work for now:
app.get('/getChef', getChef);
app.get('/getRecipe', getRecipe);
app.get('/getIngredients', getIngredients);
//var ms = require('./mathService');

app.listen(app.get("PORT"), function() {
  console.log("Now listening on port: ", app.get("PORT"));
});
//___________________________________________________________________
// //getDetails postDetails functions_________________________________________
// function getDetails(req, res) {
// 	console.log("Getting details");
// 	res.render('result', { title: '', instructions: '', servings: '', rnotes: '',
// 						   amount: '', measure: '', item: '', inotes: ''});
//   }
//   // function getIngredient(req, res) {
//   // 	console.log("Getting ingredient");  
//   // 	res.render('result', { item: '', amount: '', measure: '', inotes: ''});
//   //   }
  
//   function postDetails(req, res) {
// 	console.log("Posting details");
// 	console.log(req.body.title);
// 	console.log(req.body.instructions);
// 	console.log(req.body.servings);
// 	console.log(req.body.rnotes);
// 	console.log(req.body.amount);
// 	console.log(req.body.measure);
// 	console.log(req.body.item);
// 	console.log(req.body.inotes);
	
// 	//var result = ms.computeOperation(req.body.sign, req.body.var1, req.body.var2);
// 	//console.log(result);
// 	res.render('result', { title:       req.body.title, 
// 						   instructions:req.body.instructions, 
// 						   servings:    req.body.servings, 
// 						   rnotes:      req.body.rnotes,						  
// 						   amount:      req.body.amount, 
// 						   measure:     req.body.measure,
// 						   item:        req.body.item, 
// 						   inotes:      req.body.inotes});
//   }
// //getRecipe functions______________________________________

// function getRecipe(request, response) {
// 	console.log("Got recipe: ");
// 	var id = request.query.id;
// 	console.log("Retrieving recipe with id: ", id); 

// 	getRecipeFromDB(id, function(error, result) {
// 		console.log("Back from the database with recipe:", result);
// 		response.json(result);
// 	});
// }
// function getRecipeFromDB(id, callback) {
//      console.log("Back from the getRecipeFromDB function with the recipe: " + id);

// 	 //var result = {id: 444, first: "Betsey", last: "Delorey", birthdate: "1954-12-16"};
// 	 var sql = "SELECT recipeID, userID, title, instructions, servings, recipeNotes FROM recipes WHERE recipeID = $1::int";

//      var params = [id];

// 	pool.query(sql, params, function(err, result) {
	
// 		if (err) {
// 			console.log("Error with database occurred. ")
// 			console.log(err);
// 			callback(err, null);
// 		}

//      	console.log("Found db recipe: " + JSON.stringify(result.rows));

// 		callback(null, result.rows);
// 	});
// } 
// //getIngredients functions______________________________________

// function getIngredients(request, response) {
// 	console.log("Got ingredients: ");
// 	var id = request.query.id;
// 	console.log("Retrieving ingredients with id: ", id); 

// 	getIngredientsFromDB(id, function(error, result) {
// 		console.log("Back from the database with ingredients:", result);
// 		response.json(result);
// 	});
// }
// function getIngredientsFromDB(id, callback) {
//      console.log("Back from the getIngredientsFromDB function with the ingredients: " + id);

// 	 //var result = {id: 444, first: "Betsey", last: "Delorey", birthdate: "1954-12-16"};
// 	 var sql = "SELECT * FROM ingredients WHERE recipeID = $1::int";

//      var params = [id];

// 	pool.query(sql, params, function(err, result) {
	
// 		if (err) {
// 			console.log("Error with database occurred. ")
// 			console.log(err);
// 			callback(err, null);
// 		}

//      	console.log("Found db ingredients: " + JSON.stringify(result.rows));

// 		callback(null, result.rows);
// 	});
// } 
// //getChef functions__________________________________________________

// function getChef(request, response) {
// 	console.log("Got it: ");
// 	var id = request.query.id;
// 	console.log("Retrieving person with id: ", id); 

// 	getChefFromDB(id, function(error, result) {
// 		console.log("Back from the database with results:", result);
// 		response.json(result);
// 	});
// }

// function getChefFromDB(id, callback) {
//      console.log("Back from the getPersonFromDB function with the results: " + id);

// 	 //var result = {id: 444, first: "Betsey", last: "Delorey", birthdate: "1954-12-16"};
// 	 var sql = "SELECT userID, firstName, lastName FROM chefs WHERE userID = $1::int";

//      var params = [id];

// 	pool.query(sql, params, function(err, result) {
	
// 		if (err) {
// 			console.log("Error with database occurred. ")
// 			console.log(err);
// 			callback(err, null);
// 		}

//      	console.log("Found db result: " + JSON.stringify(result.rows));

// 		callback(null, result.rows);
// 	});
// } 
// //___________________________________________________________________
// //search all chefs functions______________________________________

// function searchAllChefs(request, response) {
// 	console.log("Retrieving all chefs"); 
// 	app.get('/users', (req, res) => {
// 		// db.all() fetches all results from an SQL query into the 'rows' variable:
// 		db.all('SELECT firstName FROM chefs', (err, rows) => {
// 		  console.log(rows);
// 		//   const allChefs = rows.map(e => e.firstName);
// 		  console.log(allChefs);
// 		  res.send(allChefs);
// 		});
// 	  });

// 	// getAllChefsFromDB(id, function(error, result) {
// 	// 	console.log("Back from the database with all chefs:", result);
// 	// 	response.json(result);
// 	// });
// }
// //search all recipes functions______________________________________

// function searchAllRecipes(request, response) {
// 	console.log("Retrieving all recipes"); 

// 	// getAllRecipesFromDB(id, function(error, result) {
// 	// 	console.log("Back from the database with all recipes:", result);
// 	// 	response.json(result);
// 	// });
// }
// //divideRecipe functions__________________________________________________
// function divideRecipe(request, response) {
// 	console.log("hit divideRecipe"); 

// 	// doDivision(id, function(error, result) {
// 	// 	console.log("Sending back division:", result);
// 	// 	response.json(result);
// 	// });
// }

// //doubleRecipe functions__________________________________________________
// function doubleRecipe(request, response) {
// 	console.log("hit doubleRecipe"); 

// 	// doDouble(id, function(error, result) {
// 	// 	console.log("Sending back double:", result);
// 	// 	response.json(result);
// 	// });
// }

// //addRecipe function______________________________________________________
// function addRecipe(request, response) {
// 	console.log("hit add recipe"); 

// 	// addRecipeToDB(id, function(error, result) {
// 	// 	console.log("Added new recipe:", result);
// 	// 	response.json(result);
// 	// });
// }