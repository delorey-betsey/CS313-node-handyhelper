// <!-- GET LOGIN FUNCTION------------------------------------------- -->

function submitUser() {
    console.log("Verifying user");
    var userName = $("#name").val();
    var userPassword = $("#password").val();

    console.log("Name: " + userName + " and password: " + userPassword + "and success: " + success);

     $.get("/logIn", {userName: userName, userPassword: userPassword}, function(data) {
         console.log("Back from server with user data:");
         console.log(data);
         var success = 1;
         $("#clientResults").append("Welcome " + userName + "!");         
         $("#success").append("success value =  " + success + "!");

         

         sessionStorage.setItem("userName", userName); 
         sessionStorage.setItem("success", success);
         console.log(sessionStorage.setItem);
         
    }); 
}
//__________NEW USER_________________________

function newUser() {
    //need userName and userPassword
    var userName = $("#name").val();
    var userPassword = $("#password").val();
   
    console.log("Name: " + userName + " and password: " + userPassword + "and success: " + success);
    var success = 1;
    sessionStorage.setItem("userName", userName);
    sessionStorage.setItem("success", success);
    var success = 1;

    console.log("Name: " + userName + " and password: " + userPassword);
 
    $.post("/newUser", {userName: userName, userPassword: userPassword},function(data){
        $("#clientResults").append("Welcome " + userName + "!");
        $("#success").append("success value =  " + success + "!");
        console.log(data);
    });
}

//__________NEW RECIPE___________________________

function newRecipe() {
    //need title, servings, instructions, recipe notes
    var chefID       = $("#chefID").val();
    var title        = $("#title").val();
    var servings     = $("#servings").val();
    var instructions = $("#instructions").val();
    var recipeNotes  = $("#recipeNotes").val();
   
    console.log("chefID: " + chefID + "title: " + title + " and servings: " + servings + "and instructions: " + instructions + "and recipeNotes: " + recipeNotes);
    var success = 1;
    sessionStorage.setItem("success", success);
    
    sessionStorage.setItem("chefID", chefID);
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("servings", servings);
    sessionStorage.setItem("instructions", instructions);
    sessionStorage.setItem("recipeNotes", recipeNotes);
    var success = 1;

    console.log("chefID: " + chefID + "title: " + title + " and servings: " + servings + "and instructions: " + instructions + "and recipeNotes: " + recipeNotes);
 
    $.post("/newRecipe", {chefID:chefID, title:title, servings:servings, instructions:instructions, recipeNotes:recipeNotes},function(data){
        //$("#clientResults").append("Welcome " + userName + "!");
        $("#addStatus").append("Success!  " + title + " recipe has been saved.");
        console.log(data);
    });
}

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

// //<!-- ----------------SEARCH ALL INGREDIENTS BY RECIPEID--------------------------- -->
// //<!-- ------------------------------------------- -->
//     $(document).ready(function(){
//         $("#displayAllIngredients"(ingredientRows)){
//     //         var ingredientID = $('input[name=ingredientID]').val();
//     //         var recipeID     = $('input[name=recipeID]').val();   
//     // 		   var item         = $('input[name=item]').val();
//     // 		   var amount       = $('input[name=amount]').val();		  
//     // 		   var measure      = $('input[name=measure]').val();				  
//     //         var itemnotes    = $('input[name=itemnotes]').val();           

//             $.ajax({
//                 type: 'get',
//                 url: '/displayAllIngredients',
//                 ingredientRows: ingredientRows {
//     // 				ingredientID :ingredientID,
//     // 				recipeID     :recipeID, 
//                     item         :item,
//                     amount       :amount,	  
//                     measure      :measure,				  
//                     itemnotes    :itemnotes
//                 },
//                 dataType: 'text',          
//                 success: (function(ingredientRows){
//                     console.log('success', ingredientRows)
//                 });
//             });
//         });
//     });
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

// $(document).ready(function(){
// 	$("#ingredients").click(function () {
// 		console.log("Hit ingredients");
	 	  
// 		$("#resultsStatus").text("need ingredients here");
// 		})
// });
//<!-- ----------------ADD NEW RECIPE--------------------------- -->
//<!-- ------------------------------------------- -->


//<!-- ----------------DIVIDE RECIPE--------------------------- -->
//<!-- ------------------------------------------- -->


//<!-- ----------------DOUBLE RECIPE--------------------------- -->
//<!-- ------------------------------------------- -->