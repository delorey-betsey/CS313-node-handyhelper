const userModel = require("../models/userModels");

function validateUser(req, res) {
    //validate a user and password
    var userName = req.query.userName; 
    var userPassword = req.query.password; 
    console.log("Validating an owner with name and password " + userName + " " + userPassword);

    userModel.searchForUser(userName, userPassword, function(error, results){
        res.json(results);
    });
}

function createNewUser(req, res) {
    //Create a new user and password
    var userName  = req.body.userName; 
    var password  = req.body.password; 
    var firstName = req.body.firstName; 
    var lastName  = req.body.lastName; 
    console.log("Creating a new owner");

    userModel.insertToSecurity(userName, password, firstName, lastName, function(error, results) {
        res.json(results);
    }); 
    userModel.insertToChefs(userName, firstName, lastName, function(req, res) {
        //res.json(results);
    });
};
//________________DISPLAY ALL CHEFS___________________  
//________________________________________________
function displayAllChefs(request, response){

    userModel.getAllChefsFromDb(function(error, result) {

      if (error || result == null) {
        response.status(500).json({success: false, data: error});
      } else {
          chefRows = result.rows;  
          response.render('displayAllChefs',{
            chefRows: chefRows      
          });
        }
    });
  }
  //________________DISPLAY ALL RECIPES -- DETAIL_________  
//________________________________________________
function displayAllRecipes(request, response){

    userModel.getRecipesFromDB(function(error, result) {
      if (error || result == null) {
        response.status(500).json({success: false, data: error});
      } else {
        recipeRows = result.rows;  
        response.render('displayAllRecipes',{
          recipeRows: recipeRows    
        });
      }
    });
  }

  function displayRecipeHeader(request, response){

    userModel.getHeaderFromDB(function(error, result) {
      if (error || result == null) {
        response.status(500).json({success: false, data: error});
      } else {
        headerRow = result.rows;  
        response.render('displayIngredients',{
        headerRow: headerRow      
        });
      }
    });
  }
//________________DISPLAY ALL INGREDIENTS -- _________  
//________________________________________________
function displayIngredients(request, response){

    userModel.getIngredientsFromDB(function(error, result) {
      if (error || result == null) {
        response.status(500).json({success: false, data: error});
      } else {
        ingredientsRows = result.rows;  
        response.render('displayIngredients',{
        ingredientsRows: ingredientsRows       
        });
      }
    });
  }

function createNewRecipe(req, res) {
    //Create a new recipe  
    var chefID       = req.body.chefID; 
    var title        = req.body.title; 
    var servings     = req.body.servings; 
    var instructions = req.body.instructions; 
    var recipeNotes  = req.body.recipeNotes; 
    console.log("Creating a new recipe");

    userModel.insertNewRecipe(chefID, title, servings, instructions, recipeNotes, function(error, results) {
        res.json(results);
    }); 
};


module.exports = {
    validateUser: validateUser,
    createNewUser: createNewUser,
    displayAllChefs: displayAllChefs, 
    displayAllRecipes: displayAllRecipes,
    displayRecipeHeader: displayRecipeHeader,
    displayIngredients: displayIngredients,    
    createNewRecipe: createNewRecipe 
};