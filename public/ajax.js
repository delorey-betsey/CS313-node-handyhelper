$(document).ready(function(){
    $("form#processDetails").on('submit', function(e){
        e.preventDefault();
        var title        = $('input[name=title]').val();
        var instructions = $('input[name=instructions]').val();   
        var servings     = $('input[name=servings]').val();          
        var rnotes       = $('input[name=rnotes]').val();        
        var amount       = $('input[name=amount]').val();   
        var measure      = $('input[name=measure]').val(); 
        var item         = $('input[name=item]').val();         
        var inotes       = $('input[name=inotes]').val();
        $.ajax({
            type: 'post',
            url: '/ajax',
            data: data {
                title:        title,
                instructions: instructions,
                servings:     servings,
                rnotes:       rnotes,                
                amount:       amount,
                measure:      measure,
                item:         item,
                inotes:       inotes  
            },          
            dataType: 'text'
        });
        .done(function(data){
            $('h1').html(data.quote);
        });
    });
});


$(document).ready(function(){
    $("form#storeRecipe").on('submit', function(e){
        e.preventDefault();
        var title        = $('input[name=title]').val();
        var instructions = $('input[name=instructions]').val();   
        var servings     = $('input[name=servings]').val();          
        var rnotes       = $('input[name=rnotes]').val(); 

        var item         = $('input[name=item]').val();        
        var amount       = $('input[name=amount]').val();   
        var measure      = $('input[name=measure]').val();        
        var inotes       = $('input[name=inotes]').val();

        $.ajax({
            type: 'post',
            url: '/ajax',
            data: data{
                title:        title,
                instructions: instructions,
                servings:     servings,
                rnotes:       rnotes,  
                
                item:        item,
                amount:      amount,
                measure:     measure,
                inotes:      inotes,

            },
            dataType: 'text'
        })
        .done(function(data){
            $('h1').html(data.quote);
        });
    });
});
//getDetails postDetails functions_________________________________________
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
//getRecipe functions______________________________________

function getRecipe(request, response) {
	console.log("Got recipe: ");
	var id = request.query.id;
	console.log("Retrieving recipe with id: ", id); 

	getRecipeFromDB(id, function(error, result) {
		console.log("Back from the database with recipe:", result);
		response.json(result);
	});
}
function getRecipeFromDB(id, callback) {
     console.log("Back from the getRecipeFromDB function with the recipe: " + id);

	 //var result = {id: 444, first: "Betsey", last: "Delorey", birthdate: "1954-12-16"};
	 var sql = "SELECT recipeID, userID, title, instructions, servings, recipeNotes FROM recipes WHERE recipeID = $1::int";

     var params = [id];

	pool.query(sql, params, function(err, result) {
	
		if (err) {
			console.log("Error with database occurred. ")
			console.log(err);
			callback(err, null);
		}

     	console.log("Found db recipe: " + JSON.stringify(result.rows));

		callback(null, result.rows);
	});
} 
//getIngredients functions______________________________________

function getIngredients(request, response) {
	console.log("Got ingredients: ");
	var id = request.query.id;
	console.log("Retrieving ingredients with id: ", id); 

	getIngredientsFromDB(id, function(error, result) {
		console.log("Back from the database with ingredients:", result);
		response.json(result);
	});
}
function getIngredientsFromDB(id, callback) {
     console.log("Back from the getIngredientsFromDB function with the ingredients: " + id);

	 //var result = {id: 444, first: "Betsey", last: "Delorey", birthdate: "1954-12-16"};
	 var sql = "SELECT * FROM ingredients WHERE recipeID = $1::int";

     var params = [id];

	pool.query(sql, params, function(err, result) {
	
		if (err) {
			console.log("Error with database occurred. ")
			console.log(err);
			callback(err, null);
		}

     	console.log("Found db ingredients: " + JSON.stringify(result.rows));

		callback(null, result.rows);
	});
} 
//getChef functions__________________________________________________

function getChef(request, response) {
	console.log("Got it: ");
	var id = request.query.id;
	console.log("Retrieving person with id: ", id); 

	getChefFromDB(id, function(error, result) {
		console.log("Back from the database with results:", result);
		response.json(result);
	});
}

function getChefFromDB(id, callback) {
     console.log("Back from the getPersonFromDB function with the results: " + id);

	 //var result = {id: 444, first: "Betsey", last: "Delorey", birthdate: "1954-12-16"};
	 var sql = "SELECT userID, firstName, lastName FROM chefs WHERE userID = $1::int";

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
//___________________________________________________________________
//search all chefs functions______________________________________

function searchAllChefs(request, response) {
	console.log("Retrieving all chefs"); 
	app.get('/users', (req, res) => {
		// db.all() fetches all results from an SQL query into the 'rows' variable:
		db.all('SELECT firstName FROM chefs', (err, rows) => {
		  console.log(rows);
		//   const allChefs = rows.map(e => e.firstName);
		  console.log(allChefs);
		  res.send(allChefs);
		});
	  });

	// getAllChefsFromDB(id, function(error, result) {
	// 	console.log("Back from the database with all chefs:", result);
	// 	response.json(result);
	// });
}
//search all recipes functions______________________________________

function searchAllRecipes(request, response) {
	console.log("Retrieving all recipes"); 

	// getAllRecipesFromDB(id, function(error, result) {
	// 	console.log("Back from the database with all recipes:", result);
	// 	response.json(result);
	// });
}
//divideRecipe functions__________________________________________________
function divideRecipe(request, response) {
	console.log("hit divideRecipe"); 

	// doDivision(id, function(error, result) {
	// 	console.log("Sending back division:", result);
	// 	response.json(result);
	// });
}

//doubleRecipe functions__________________________________________________
function doubleRecipe(request, response) {
	console.log("hit doubleRecipe"); 

	// doDouble(id, function(error, result) {
	// 	console.log("Sending back double:", result);
	// 	response.json(result);
	// });
}

//addRecipe function______________________________________________________
function addRecipe(request, response) {
	console.log("hit add recipe"); 

	// addRecipeToDB(id, function(error, result) {
	// 	console.log("Added new recipe:", result);
	// 	response.json(result);
	// });
}
