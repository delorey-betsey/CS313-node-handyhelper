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
$(document).ready(function(){
	$("#home").click(function (req,res) {
		console.log("Hit home");		
		// $('#loginResults').text("");
		res.render('landing');
		})
});