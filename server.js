require('dotenv').config()
const express = require('express')
const app = express();
const path = require('path')

const PORT = process.env.PORT || 5000

// express()
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(express.json())
  app.use(express.urlencoded({extended: true}))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  app.get('/', (req, res) => res.render('landing'));
  app.post('/login', function(res, req) {
    console.log("username: " + username +  " password: " + password )
  });
  app.post('/logout', function(res, req) {  
  });
  app.post('/getServerTime', function(res, req){
  });
  
  app.post('/addNewRecipe', function(req, res){
  });

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
//___________________________________________________________________
//_______ADD NEW RECIPE FUNCTION_________________________________________
function addNewRecipe(req, res) {
    console.log("Getting details");
    res.render('addNewRecipe', { title: '', instructions: '', servings: '', rnotes: '',
                  amount: '', measure: '', item: '', inotes: ''});
    }

function postNewRecipe(req, res) {
    console.log("Posting details");
    console.log(req.body.title);
    console.log(req.body.instructions);
    console.log(req.body.servings);
    console.log(req.body.rnotes);
    console.log(req.body.amount);
    console.log(req.body.measure);
    console.log(req.body.item);
    console.log(req.body.inotes);
  
    res.render('addNewRecipe', { 
      title:       req.body.title, 
      instructions:req.body.instructions, 
      servings:    req.body.servings, 
      rnotes:      req.body.rnotes,						  
      amount:      req.body.amount, 
      measure:     req.body.measure,
      item:        req.body.item, 
      inotes:      req.body.inotes});
}
  