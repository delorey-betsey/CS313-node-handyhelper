// <!-- GET LOGIN FUNCTION------------------------------------------- -->

function submitUser() {
    console.log("Verifying user");
    var userName = $("#userName").val();
    var userPassword = $("#password").val();

    console.log("Name: " + userName + " and password: " + userPassword + "and success: " + success);

     $.get("/logIn", {userName: userName, userPassword: userPassword}, function(data) {
         console.log("Back from server with user data:");
         console.log(data);
         var success = 1;
         $("#clientResults").empty();
         $("#success").empty();
         $("#userName").empty();
         $("#password").empty();
         $("#firstName").empty();
         $("#lastName").empty();
         $("#clientResults").append("Welcome " + userName + "!");         
         //$("#success").append("success value =  " + success + "!");        

         sessionStorage.setItem("userName", userName); 
         sessionStorage.setItem("success", success);
         console.log(sessionStorage.setItem);
         
    }); 
}
//__________NEW USER_________________________

function newUser() {
    //need userName and userPassword
    var userName = $("#userName").val();
    var password = $("#password").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
   
    console.log("Name: " + userName + " and password: " + password + "and success: " + success);
    var success = 1;
    sessionStorage.setItem("userName", userName);
    sessionStorage.setItem("firstName", firstName);
    sessionStorage.setItem("lastName", lastName);
    sessionStorage.setItem("success", success);
    
    console.log("Name: " + userName + " and password: " + password);
 
    $.post("/newUser", {userName: userName, password: password, firstName: firstName, lastName: lastName},function(data){
        $("#clientResults").empty();
        $("#success").empty();
        $("#userName").empty();
        $("#password").empty();
        $("#firstName").empty();
        $("#lastName").empty();
        $("#clientResults").append("Welcome " + firstName +" "+ lastName + "!");
        //$("#success").append("success value =  " + success + "!");
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
        $("#addStatus").empty();
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

// // <!-- ----------------DOUBLE FUNCTION--------------------------- -->
// // <!-- ------------------------------------------- -->

// $(document).ready(function(){
// 	$("#double").click(function () {
// 		console.log("Hit double");
	 	  
// 		$("#resultsStatus").text("double ingredients here");
// 		})
// });

// // <!-- ----------------DIVIDE FUNCTION--------------------------- -->
// // <!-- ------------------------------------------- -->

// $(document).ready(function(){
// 	$("#divide").click(function () {
// 		console.log("Hit divide");
	 	  
// 		$("#resultsStatus").text("divide ingredients here");
// 		})
// });

