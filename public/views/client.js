// <!-- GET LOGIN FUNCTION------------------------------------------- -->

$(document).ready(function(){
	$("#login").click(function(){
		var username = $("#username").val();		
		var password = $("#password").val();
		var params = { username: username, password: password };
		console.log(params);
		$('#loginResults').text("Successfully logged in.");
	})
});

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

$(document).ready(function(){
	$("#logout").click(function () {
		console.log("Hit logout");
		$('#loginResults').text("Successfully logged out.");
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