require("dotenv").config({path: '../.env'});

var keys = require("./keys");

var Twitter = require('twitter');

//var spotify = new Spotify(keys.spotify);

var client = new Twitter(keys.twitter);

console.log("keys ", keys.twitter);

var args = process.argv;

var myTweets = args[2];

client.get('https://api.twitter.com/1.1/statuses/mentions_timeline.json', function(error, tweets, response) {
    if(error) {
        console.log('error', error);
    }
    console.log('tweets', tweets);  // The favorites. 
    console.log(response);  // Raw response object. 
  });

  var Spotify = require('node-spotify-api');
 
  var spotify = new Spotify(keys.spotify);
   
  spotify
    .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function(data) {
      console.log(data); 
    })
    .catch(function(err) {
      console.error('Error occurred: ' + err); 
    });

    // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");

// Grab the movieName which will always be the third node argument.
var movieName = process.argv[2];

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Release Year: " + JSON.parse(body).Year);
  }
});
