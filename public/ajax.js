$(document).ready(function(){
    $("form#storeRecipe").on('submit', function(e){
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
