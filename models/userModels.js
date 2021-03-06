//interacts with the database
const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

//const bcrypt = require('bcrypt');
//const saltRounds = 10;

function searchForUser(userName, userPassword, callback) {
    //validate a user and password
    
    var sql = "SELECT username, password FROM security WHERE username = $1::text";
    var params = [userName];
    console.log("Searching DB for matching username and password: " + userName + " " + userPassword)

    pool.query(sql, params, function(err, db_results) {
        if (err) {
            console.log("An error occurred with the DB");
            console.log(err);
            callback(err, null);
        } else {
             console.log(db_results);
            //  var enteredPassword = userPassword;
            //  var hash = db_results.rows[0].password;
             
            // bcrypt.compare(enteredPassword, hash, function(err, result) {
            //     if (err) {
            //         console.log("An error occurred with password compare");
            //         console.log(err);
            //         callback(err, null);
            //     }else {
            //         if (result == true) {
            var results = {user: userName, success: true};
            console.log("model login:" + results)
            callback(null,results);
            }
            // else{
            //     results = {success: false};
            //     callback(err, results);
            //     //TODO: send back to home page with an error message in <div id="addResults">
            // }
        //} 
        //}) 
    //     };
    });
};   

function insertToSecurity(userName, password, firstName, lastName, callback) {
    console.log("hit insert to security");
    //Create a new user and password
    //var enteredPassword = password;
    //bcrypt.hash(enteredPassword, saltRounds, function(err, hash) {
        var sql = "INSERT INTO security(username, password) VALUES ($1::text,$2::text)";
        var params = [userName, password]; 

        pool.query(sql, params, function(err, db_results) {
            if (err) {
                console.log("An error occurred with the DB");
                console.log(err);
                callback(err, null);
            } else {
                console.log("New User: " + userName + " inserted into DB security");
                console.log(db_results);
                var results = {userName:userName, firstName:firstName, lastName:lastName, success: true};
                console.log("model new user:" + results)
                callback(null, results); 
            };
        });
};

function insertToChefs(userName, firstName, lastName, callback) {
    console.log("hit insert to chefs");    
    console.log(userName, firstName, lastName);
    //Create a new user and password
    //var enteredPassword = password;
    //bcrypt.hash(enteredPassword, saltRounds, function(err, hash) {
        var sql = "INSERT INTO chefs(userName, firstName, lastName) VALUES ($1::text,$2::text,$3::text)";
        var params = [userName, firstName, lastName]; 

        pool.query(sql, params, function(err, db_results) {
            if (err) {
                console.log("An error occurred with the insert to chefsDB");
                console.log(err);
                callback(err, null);
            } else {
                console.log("New User: " + userName + " inserted into DB chefs");
                console.log(db_results);
                var db_results = {userName:userName, firstName:firstName, lastName:lastName, success: true};
                console.log("model new user:" + db_results)
                callback(null, db_results); 
            }; 
        });
};

function getAllChefsFromDb(callback) {
    console.log("Getting chefs from DB");
    var sql = "SELECT * FROM chefs";

    pool.query (sql,function(err,result){
      if (err) {
        console.log("Error with select chefs database occurred. ")
        console.log(err);
        callback(err, null);
      } 	 
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result);
	});
} 
function getRecipesFromDB(callback) {
    console.log("Getting recipes from DB");
    var sql = "SELECT recipeID, chefID, title, instructions, servings, recipenotes FROM recipes";

    pool.query (sql,function(err,result){
      if (err) {
        console.log("Error with select recipes database occurred. ")
        console.log(err);
        callback(err, null);
      } 	 
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result);
	});
}
function getHeaderFromDB(callback) {
    console.log("Getting recipe header from DB");
    var sql = "SELECT recipeID, chefID, title, instructions, servings, recipenotes FROM recipes";

    pool.query (sql,function(err,result){
      if (err) {
        console.log("Error with select recipes database occurred. ")
        console.log(err);
        callback(err, null);
      } 	 
		console.log("Found result: " + JSON.stringify(result.rows));
		callback(null, result);
	});
}
function getIngredientsFromDB(callback) {
    console.log("Getting ingredients from DB");
    var sql = "SELECT ingredientID, recipeID, item, amount, measure, itemNotes FROM ingredients WHERE recipeID = 200";

    pool.query (sql,function(err,result){
      if (err) {
        console.log("Error on select ingredients occurred. ")
        console.log(err);
        callback(err, null);
      } 	 
        console.log("Found result: " + JSON.stringify(result.rows));
        callback(null, result);

	});
}

function insertNewRecipe(chefID, title, servings, instructions, recipeNotes, callback) {
     
    var enteredChefID       = chefID;
    var enteredTitle        = title;
    var enteredServings     = servings;
    var enteredInstructions = instructions;
    var enteredRecipeNotes  = recipeNotes;
    
    var sql = "INSERT INTO recipes(chefID, title, servings, instructions, recipeNotes) VALUES ($1::int, $2::text, $3::text, $4::text, $5::text)";
    var params = [enteredChefID, enteredTitle, enteredServings, enteredInstructions, enteredRecipeNotes]; 

    pool.query(sql, params, function(err, db_results) {
        if (err) {
            console.log("An error occurred with the DB on entering new recipe");
            console.log(err);
            callback(err, null);
        }else {
            console.log("New Recipe: " + title + " inserted into DB");
            console.log(db_results);
        }; 
    });

    var results = {chefID:chefID, title:title, servings:servings, instructions:instructions, recipeNotes:recipeNotes, success: true};
    console.log("model new recipe:" + results)
    callback(null, results); 
};

module.exports = {
    searchForUser: searchForUser,
    insertToSecurity: insertToSecurity,
    getAllChefsFromDb: getAllChefsFromDb,
    getRecipesFromDB: getRecipesFromDB,
    getHeaderFromDB: getHeaderFromDB,
    getIngredientsFromDB: getIngredientsFromDB,
    insertToChefs: insertToChefs,
    insertNewRecipe: insertNewRecipe
};


