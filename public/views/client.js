// <!-- GET LOGIN FUNCTION------------------------------------------- -->

function submitUser() {
    console.log("Verifying user");
    var userName = $("#name").val();
    var userPassword = $("#password").val();
    console.log("Name: " + userName + " and password: " + userPassword);

     $.get("/logIn", {userName: userName, userPassword: userPassword}, function(data) {
         console.log("Back from server with user data:");
         console.log(data);
         $("#addResults").append(data);

         //var owner = userName;

         sessionStorage.setItem("userName", userName); 
    }); 
}
//__________NEW USER_________________________

function newUser() {
    //need userName and userPassword
    var userName = $("#name").val();
    var userPassword = $("#password").val();

    sessionStorage.setItem("userName", userName);

    console.log("Name: " + userName + " and password: " + userPassword);

    $.post("/newUser", {userName: userName, userPassword: userPassword},function(data){
        $("#clientResults").append("Welcome " + userName);
        console.log(data);
    });
}

function newCollection() {
    var userName = sessionStorage.getItem("collectionOwner");
    console.log("Lets create a new collection for " + userName);

    $("#newCollectForm").append("<h4>You must provide one item in the collection to start a collection.</h4>");
    $("#newCollectForm").append("<form action=\"#\" method=\"POST\" id=\"insertCollection\">" + 
    "<label for=\"colName\"> Collection Name:</label><br>" + 
    "<input type=\"text\" id=\"colName\" name=\"colName\"><br>" + 
    "<label for=\"item\">Item Name:</label><br>" + 
    "<input type=\"text\" id=\"item\" name=\"item\"><br>" +  
    "<label for=\"desc\">Item description:</label><br>" + 
    "<input type=\"text\" id=\"desc\" name=\"desc\"><br><br>" + 
    "<input type=\"button\" name=\"submit_form\" id=\"col_submit\" value=\"Add Collection\" onclick=\"addCollectiontoDB()\"> " +  
    "</form>");
 
}

// $(document).ready(function(){
// 	$("#login").click(function(){
// 		var username = $("#username").val();		
// 		var password = $("#password").val();
// 		var params = { username: username, password: password };
// 		console.log(params);
// 		$('#loginResults').text("Successfully logged in:  " + username);
// 	})
// });

// <!-- ----------------GET TIMESTAMP FUNCTION--------------------------- -->
// <!-- ------------------------------------------- -->

$(document).ready(function(){
	$("#getTimestamp").click(function () {
		console.log("Hit servertime");
		var time = new Date();		 	  
		$("#status").text(time);
		console.log(time); 
		})
});

// <!-- ----------------LOGOUT--------------------------- -->
// <!-- ------------------------------------------- -->

// $(document).ready(function(){
// 	$("#logout").click(function () {
// 		console.log("Hit logout");
// 		$('#loginResults').text("Successfully logged out.");
// 		})
// });

// <!-- ----------------PROCESS ADD RECIPE FUNCTION--------------------------- -->
// <!-- ------------------------------------------- -->

// $(document).ready(function(){
// 	$("#processAddRecipe").click(function () {
// 		console.log("Hit process add recipe");
	 	  
// 		$("#addStatus").text("successful add message here");
// 		})
// });

// <!-- ----------------INGREDIENTS FUNCTION--------------------------- -->
// <!-- ------------------------------------------- -->

$(document).ready(function(){
	$("#ingredients").click(function () {
		console.log("Hit ingredients");
	 	  
		$("#resultsStatus").text("need ingredients here");
		})
});

// <!-- ----------------DOUBLE FUNCTION--------------------------- -->
// <!-- ------------------------------------------- -->

$(document).ready(function(){
	$("#double").click(function () {
		console.log("Hit double");
	 	  
		$("#resultsStatus").text("double ingredients here");
		})
});

// <!-- ----------------DIVIDE FUNCTION--------------------------- -->
// <!-- ------------------------------------------- -->

$(document).ready(function(){
	$("#divide").click(function () {
		console.log("Hit divide");
	 	  
		$("#resultsStatus").text("divide ingredients here");
		})
});

//<!-- ----------------SEARCH ALL CHEFS--------------------------- -->
//<!-- ------------------------------------------- -->
// $(document).ready(function(){
//     $("#displayAllChefs"(chefRows)){
//         var id        = $('input[name=id]').val();
//         var firstName = $('input[name=firstName]').val();   
//         var lastName  = $('input[name=lastName]').val();          

//         $.ajax({
//             type: 'post',
//             url: '/ajax',
//             chefRows: chefRows {
//                 id:        id,
//                 firstName: firstName,
//                 lastName:  lastName
//             },
//             dataType: 'text'
//         })
//         .done(function(chefRows){
//             $('h1').html(data.quote);
//         });
//     });
// });
//<!-- ----------------SEARCH ALL RECIPES--------------------------- -->
//<!-- ------------------------------------------- -->
// $(document).ready(function(){
//     $("#displayAllChefs"(chefRows)){
//         var recipeID      = $('input[name=recipeID]').val();
//         var userID        = $('input[name=userID]').val();   
// 		   var instructions  = $('input[name=instructions]').val();
// 		   var servings      = $('input[name=servings]').val();		  
//         var recipenotes   = $('input[name=recipeNotes]').val();           

//         $.ajax({
//             type: 'post',
//             url: '/ajax',
//             chefRows: chefRows {
//                 id:        id,
// 				firstName: firstName,
// 				firstName: firstName,
//                 lastName:  lastName
//             },
//             dataType: 'text'
//         })
//         .done(function(chefRows){
//             $('h1').html(data.quote);
//         });
//     });
// });

//<!-- ----------------SEARCH ALL INGREDIENTS BY RECIPEID--------------------------- -->
//<!-- ------------------------------------------- -->
// $(document).ready(function(){
//     $("#displayAllChefs"(chefRows)){
//         var ingredientID = $('input[name=ingredientID]').val();
//         var recipeID     = $('input[name=recipeID]').val();   
// 		   var item         = $('input[name=item]').val();
// 		   var amount       = $('input[name=amount]').val();		  
// 		   var measure      = $('input[name=measure]').val();				  
//         var itemnotes    = $('input[name=itemnotes]').val();           

//         $.ajax({
//             type: 'post',
//             url: '/ajax',
//             chefRows: chefRows {
// 				ingredientID :ingredientID,
// 				recipeID     :recipeID, 
// 				item         :item,
// 				amount       :amount,	  
// 				measure      :measure,				  
// 				itemnotes    :itemnotes
//             },
//             dataType: 'text'
//         })
//         .done(function(chefRows){
//             $('h1').html(data.quote);
//         });
//     });
// });

//<!-- ----------------ADD NEW RECIPE--------------------------- -->
//<!-- ------------------------------------------- -->


//<!-- ----------------DIVIDE RECIPE--------------------------- -->
//<!-- ------------------------------------------- -->


//<!-- ----------------DOUBLE RECIPE--------------------------- -->
//<!-- ------------------------------------------- -->