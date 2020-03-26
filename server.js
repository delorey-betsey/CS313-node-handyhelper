require('dotenv').config()
const express = require('express')
const app = express();
const path = require('path')
// const { Pool } = require('pg')
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: true
// })
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

  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))