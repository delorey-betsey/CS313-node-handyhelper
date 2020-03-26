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
// <!-- ----------------ADD NEW RECIPE--------------------------- -->
// <!-- ------------------------------------------- -->
$(document).ready(function(){
    $("form#addNewRecipe").on('submit', function(e){
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
            data: data{
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
        })
        .done(function(data){
            $('h1').html(data.quote);
        });
    });
});


$(document).ready(function(){
    $("form#postNewRecipe").on('submit', function(e){
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
