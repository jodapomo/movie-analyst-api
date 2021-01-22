// Get our dependencies
require('dotenv').config();
const express = require('express');
const mysql = require("mysql");
const env = require('./env');

const app = express();

const connection = mysql.createConnection({
  host     : env.MYSQL_HOST,
  port     : env.MYSQL_PORT,
  user     : env.MYSQL_USER,
  password : env.MYSQL_PASSWORD,
  database : env.MYSQL_DB_NAME,
});

connection.connect();


app.get('/', function(req, res){
  var response = [{response : 'hello'}, {code : '200'}]
  res.json(response);
})

function getMovies(callback) {    
  connection.query(`SELECT * FROM ${env.MYSQL_DB_NAME}.moviereview`,
    function (err, rows) {
      callback(err, rows); 
    }
  ); 
}
app.get('/movies', function(req, res, next) {   
  getMovies(function (err, movies){
    res.json(movies);
  });
});

function getReviewers(callback) {    
  connection.query(`SELECT * FROM ${env.MYSQL_DB_NAME}.reviewer`,
    function (err, rows) {
      callback(err, rows); 
    }
  ); 
}
app.get('/reviewers', function(req, res){
  getReviewers(function (err, reviewers){
    res.json(reviewers);
  });
})

function getPublications(callback) {    
  connection.query(`SELECT * FROM ${env.MYSQL_DB_NAME}.publication`,
    function (err, rows) {
      callback(err, rows); 
    }
  ); 
}
app.get('/publications', function(req, res){
  getPublications(function (err, publications){
    res.json(publications);
  });
})

app.get('/pending', function(req, res){
  var pending = [
    {title : 'Superman: Homecoming', release: '2017', score: 10, reviewer: 'Chris Harris', publication: 'International Movie Critic'},
    {title : 'Wonder Woman', release: '2017', score: 8, reviewer: 'Martin Thomas', publication : 'TheOne'},
    {title : 'Doctor Strange', release : '2016', score: 7, reviewer: 'Anthony Miller', publication : 'ComicBookHero.com'}
  ]
  res.json(pending);
})

console.log(`Server listening through port: ${env.API_PORT}`);
app.listen(env.API_PORT);
module.exports = app;
