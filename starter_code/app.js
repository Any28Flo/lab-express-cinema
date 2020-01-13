require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');


mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;

const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      
//Tells express where the views folder is 
app.set('views', path.join(__dirname, 'views'));
//Tells expresss that any file ending in hbs 
//Should be rendered with the hbs package
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

//Declare partials
hbs.registerPartials(__dirname + '/views/partials');

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


const index = require('./routes/index');

const Movie = require('./models/Movie');


app.use('/', index);

app.get("/movies", (req,res)=>{

  Movie.find()
    .then(allMovies =>{
      res.render('movies', {movies : allMovies});
    })
    .catch(err=>{
      res.json({
        confirmation: "Fail",
        message : err.message
      })
    })
})

app.get("/movies/:movieId", (req,res)=>{
    Movie.findOne({'_id' : req.params.movieId})
  .then(theMovie =>{
    res.render('movie-details', {movie : theMovie});
  })
  .catch(err=>{console.log(`An error while retrieving the movie ${err}`)})
})

app.listen(3000);

module.exports = app;
