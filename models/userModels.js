//interacts with the database
const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});

const bcrypt = require('bcrypt');
const saltRounds = 10;

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
        }else {
             console.log(db_results);
             var enteredPassword = userPassword;
             var hash = db_results.rows[0].password;
             
            bcrypt.compare(enteredPassword, hash, function(err, result) {
                if (err) {
                    console.log("An error occurred with password compare");
                    console.log(err);
                    callback(err, null);
                }else {
                    if (result == true) {
                    var results = {user: userName, success: true};
                    console.log("model login:" + results)
                    callback(null,results);
                    }else{
                        results = {success: false};
                        callback(err, results);
                        //TODO: send back to home page with an error message in <div id="addResults">
                    }
                } 
             }) 
        };
    });
};   

function insertNewUser(userName, password, callback) {
    //Create a new user and password
    var enteredPassword = password;
    bcrypt.hash(enteredPassword, saltRounds, function(err, hash) {
        var sql = "INSERT INTO security(username, password) VALUES ($1::text,$2::text)";
        var params = [userName, hash]; 

        pool.query(sql, params, function(err, db_results) {
            if (err) {
                console.log("An error occurred with the DB");
                console.log(err);
                callback(err, null);
            }else {
                console.log("New User: " + userName + " inserted into DB");
                console.log(db_results);
            };
        //callback(null, db_results);
        //callback (null, results); // returns results to userController.createNewUser()  
        });
    });
    //var results = {user:[{userName: "Cat Cravens", password: "catWORD"}]};
    var results = {user:userName, success: true};
    console.log("model new user:" + results)
    callback(null, results); 
};

function insertNewRecipe(chefID, title, servings, instructions, recipeNotes, callback) {
    //Create a new user and password
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
    insertNewUser: insertNewUser,
    insertNewRecipe: insertNewRecipe
};



// function insertNewRecipe(title, servings, instructions, recipeNotes, callback) {
//     //Create a new user and password
//     var enteredTitle        = title;
//     var enteredServings     = servings;
//     var enteredInstructions = instructions;
//     var enteredRecipeNotes  = recipeNotes;

//     insertRecipeToDB(function(error, result) {
//         var results = {title:title, servings:servings, instructions:instructions, recipeNotes:recipeNotes, success: true};
//         console.log("model new recipe:" + results)
//         callback(null, results);
//         }); 
// };

// function insertRecipeToDB(callback, results) {
//     var sql = "INSERT INTO recipes(title, servings, instructions, recipeNotes) VALUES ($1::text, $2::text, $3::text, $4::text)";
//     var params = [enteredTitle, enteredServings, enteredInstructions, enteredRecipeNotes]; 

//     pool.query(sql, params, function(err, db_results) {
//         if (err) {
//             console.log("An error occurred with the DB on entering new recipe");
//             console.log(err);
//             callback(err, null);
//         }else {
//             console.log("New REcipe: " + title + " inserted into DB");
//             console.log(db_results);
//         };
//     }); 
// });

