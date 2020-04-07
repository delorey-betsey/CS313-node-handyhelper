require('dotenv').config()
//const cool = require('cool-ascii-faces');
const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require('body-parser');

const userController = require("./controllers/userController.js");

const PORT = process.env.PORT || 5000

const { Pool } = require("pg"); 
const connectionString = process.env.DATABASE_URL || "postgres://xeuolzgrfowtaq:6b8c8e22e66da68f1ef2e992c44f8c484f2a2f85ee874ad6f182ff673d27808b@ec2-18-206-84-251.compute-1.amazonaws.com:5432/d49k598khgjq6h";
//postgres://xeuolzgrfowtaq:6b8c8e22e66da68f1ef2e992c44f8c484f2a2f85ee874ad6f182ff673d27808b@ec2-18-206-84-251.compute-1.amazonaws.com:5432/d49k598khgjq6h
const pool = new Pool({connectionString: connectionString,ssl:true});

// express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.set('views', path.join(__dirname, 'public/views'))
  app.set('view engine', 'ejs')


// -----------------TWO HOMEPAGES (landing and wilson------
  app.get('/', (req, res) => res.render('landing'));
  //app.get('/landing', (req, res) => res.render('landing'));
  app.get('/wilson', (req, res) => res.render('wilson'));

//endpoints
  app.get("/logIn", userController.validateUser);
  app.post("/newUser", userController.createNewUser);

  app.get('/displayAllChefs', userController.displayAllChefs);
  app.get('/addNewRecipe', addNewRecipe);
  app.post("/newRecipe", userController.createNewRecipe);

  app.get('/displayAllRecipes', userController.displayAllRecipes); 
  app.get('/displayIngredients', userController.displayIngredients);

  //app.get("/cool", (req, res) => res.send(cool()));
  
  //app.get('/processAddRecipe', processAddRecipe);  

  app.get('/divideRecipe', divideRecipe);
  app.get('/doubleRecipe', doubleRecipe);

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

  //___________________________________________________________________
//_______ADD NEW RECIPE FUNCTION_________________________________________
function addNewRecipe(req, res) {
  console.log("Hit add new recipe");
  res.render('addNewRecipe')
  }
  // ________________DISPLAY INGREDIENTS BY RECIPEID______________  
  // ____________________________________________________________
  // function displayIngredients(req, res) {
  //   console.log("Hit display ingredients");



  //   res.render('displayIngredients')
  //   }

    //___________________________________________________________________
//_______TEST PROCESS... FUNCTION_________________________________________
// function processAddRecipe(chefID, title, instructions, servings, rnotes) {
//   console.log("Hit process add recipe");
//   //$("#addStatus").text("Your recipe has been saved.");
//   res.render('addNewRecipe')
//   }

//________________DISPLAY ALL CHEFS___________________  
//________________________________________________
// function displayAllChefs(request, response){

//     getAllChefsFromDb(function(error, result) {

//       if (error || result == null) {
//         response.status(500).json({success: false, data: error});
//       } else {
//           chefRows = result.rows;  
//           response.render('displayAllChefs',{
//             chefRows: chefRows
//             // userid:    userID,
//             // firstName: firstName, 
//             // lastName:  lastName           
//           });
//         }
//     });
//   }
//   function getAllChefsFromDb(callback) {
//     console.log("Getting chefs from DB");
//     var sql = "SELECT * FROM chefs";

//     pool.query (sql,function(err,result){
//       if (err) {
//         console.log("Error with select chefs database occurred. ")
//         console.log(err);
//         callback(err, null);
//       } 	// Log this to the console for debugging purposes.
// 		console.log("Found result: " + JSON.stringify(result.rows));
// 		callback(null, result);
// 	});
// } 

//________________DISPLAY ALL RECIPES -- DETAIL_________  
//________________________________________________
// function displayAllRecipes(request, response){

//     getDetailsAllRecipesFromDb(function(error, result) {
//       // This is the callback function that will be called when the DB is done.
//       // The job here is just to send it back.
  
//       // Make sure we got a row with the person, then prepare JSON to send back
//       if (error || result == null) {
//         response.status(500).json({success: false, data: error});
//       } else {
//         recipeRows = result.rows;  
//         response.render('displayAllRecipes',{
//           recipeRows: recipeRows
//           // userid:    userID,
//           // firstName: firstName, 
//           // lastName:  lastName           
//         });
//       }
//     });
//   }
//   function getDetailsAllRecipesFromDb(callback) {
//     console.log("Getting recipes from DB");
//     var sql = "SELECT recipeID, chefID, title, instructions, servings, recipenotes FROM recipes";

//     pool.query (sql,function(err,result){
//       if (err) {
//         console.log("Error with select recipes database occurred. ")
//         console.log(err);
//         callback(err, null);
//       } 	// Log this to the console for debugging purposes.
// 		console.log("Found result: " + JSON.stringify(result.rows));
// 		callback(null, result);
// 	});
// }


//___________________________________________________________________
//_______DIVIDE RECIPE FUNCTION_________________________________________
function divideRecipe(req, res) {
  console.log("Hit divide recipe");
  res.render('divideRecipe')
  }

  //___________________________________________________________________
//_______DOUBLE RECIPE FUNCTION_________________________________________
function doubleRecipe(req, res) {
  console.log("Hit double recipe");
  res.render('doubleRecipe')
  }

  