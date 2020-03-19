$(document).ready(function(){
    $("form#processInput").on('submit', function(e){
        e.preventDefault();
        var title        = $('input[name=title]').val();
        var instructions = $('input[name=instructions]').val();   
        var servings     = $('input[name=servings]').val();          
        var rnotes       = $('input[name=rnotes]').val();
        $.ajax({
            type: 'post',
            url: '/ajax',
            data: data{
  		title:        title,
		instructions: instructions,
		servings:     servings,
		rnotes:       rnotes
	    },
            dataType: 'text'
        })
        .done(function(data){
            $('h1').html(data.quote);
        });
    });
});