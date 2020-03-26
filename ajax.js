// <!-- GET LOGIN FUNCTION------------------------------------------- -->
/* <script> */
$(document).ready(function(){
	$("#login").click(function(){
		var username = $("#username").val();		
		var password = $("#password").val();
		var params = { username: username, password: password };
		console.log(params);
		$('#loginResults').text("Successfully logged in.");
		$('#status').text(JSON.stringify(params));
	})
});
// </script>
// <!-- ----------------GET TIMESTAMP FUNCTION--------------------------- -->
// <!-- ------------------------------------------- -->
/* <script> */
$(document).ready(function(){
	$("#getTimestamp").click(function () {
		console.log("Hit servertime");
		var time = new Date();		 
		//var result = text(event.timestamp);	  
		$("#status").text(time);
		console.log(time); 
		})
});
/* </script> */

// <!-- ----------------LOGOUT--------------------------- -->
// <!-- ------------------------------------------- -->
/* <script> */
$(document).ready(function(){
	$("#logout").click(function () {
		console.log("Hit logout");
		// $('#loginResults').text("");
		$('#loginResults').text("Successfully logged out.");
		$("#status").text("");
		})
	});
/* </script> */