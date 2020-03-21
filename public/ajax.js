$(document).ready(function(){
    $("form#storeRecipe").on('submit', function(e){
        e.preventDefault();
        var 1title        = $('input[name=1title]').val();
        var 1instructions = $('input[name=1instructions]').val();   
        var 1servings     = $('input[name=1servings]').val();          
        var 1rnotes       = $('input[name=1rnotes]').val(); 

        var 2item         = $('input[name=2item]').val();        
        var 2amount       = $('input[name=2amount]').val();   
        var 2measure      = $('input[name=2measure]').val();        
        var 2inotes       = $('input[name=2inotes]').val();

        var 3item         = $('input[name=3item]').val();        
        var 3amount       = $('input[name=3amount]').val();   
        var 3measure      = $('input[name=3measure]').val();        
        var 3inotes       = $('input[name=3inotes]').val();

        var 4item         = $('input[name=4item]').val();        
        var 4amount       = $('input[name=4amount]').val();   
        var 4measure      = $('input[name=4measure]').val();        
        var 4inotes       = $('input[name=4inotes]').val();

        var 5item         = $('input[name=5item]').val();        
        var 5amount       = $('input[name=5amount]').val();   
        var 5measure      = $('input[name=5measure]').val();        
        var 5inotes       = $('input[name=5inotes]').val();

        var 6item         = $('input[name=6item]').val();        
        var 6amount       = $('input[name=6amount]').val();   
        var 6measure      = $('input[name=6measure]').val();        
        var 6inotes       = $('input[name=6inotes]').val();

        var 7item         = $('input[name=7item]').val();        
        var 7amount       = $('input[name=7amount]').val();   
        var 7measure      = $('input[name=7measure]').val();        
        var 7inotes       = $('input[name=7inotes]').val();

        var 8item         = $('input[name=8item]').val();        
        var 8amount       = $('input[name=8amount]').val();   
        var 8measure      = $('input[name=8measure]').val();        
        var 8inotes       = $('input[name=8inotes]').val();

        var 9item         = $('input[name=9item]').val();        
        var 9amount       = $('input[name=9amount]').val();   
        var 9measure      = $('input[name=9measure]').val();        
        var 9inotes       = $('input[name=9inotes]').val();

        var 10item         = $('input[name=10item]').val();        
        var 10amount       = $('input[name=10amount]').val();   
        var 10measure      = $('input[name=10measure]').val();        
        var 10inotes       = $('input[name=10inotes]').val();

        $.ajax({
            type: 'post',
            url: '/ajax',
            data: data{
                title:        title,
                instructions: instructions,
                servings:     servings,
                rnotes:       rnotes,  
                
                1item:         1item,
                1amount:       1amount,
                13measure:     1measure,
                1inotes:       1inotes,

                2item:         2item,
                2amount:       2amount,
                2measure:      2measure,
                2inotes:       2inotes,

                3item:         3item,
                3amount:       3amount,
                3measure:      3measure,
                3inotes:       3inotes,

                4item:         4item,
                4amount:       4amount,
                4measure:      4measure,
                4inotes:       4inotes,

                5item:         5item,
                5amount:       5amount,
                5measure:      5measure,
                5inotes:       5inotes,

                6item:         6item,
                6amount:       6amount,
                6measure:      6measure,
                6inotes:       6inotes,

                7item:         7item,
                7amount:       7amount,
                7measure:      7measure,
                7inotes:       7inotes,

                8item:         8item,
                8amount:       8amount,
                8measure:      8measure,
                8inotes:       8inotes,

                9item:         9item,
                9amount:       9amount,
                9measure:      9measure,
                9inotes:       9inotes,

                10item:         10item,
                10amount:       10amount,
                10measure:      10measure,
                10inotes:       10inotes
            },
            dataType: 'text'
        })
        .done(function(data){
            $('h1').html(data.quote);
        });
    });
});
