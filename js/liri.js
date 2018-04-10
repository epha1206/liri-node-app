require("dotenv").config({path: '../.env'});
var request = require("request");

var keys = require("./keys");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var fs = require('fs');

var twitterClient = new Twitter(keys.twitter);
var spotifyClient = new Spotify(keys.spotify);

var args = process.argv;

var liriCommand = args[2];

if(liriCommand === "my-tweets") {
    
    twitterClient.get('https://api.twitter.com/1.1/statuses/mentions_timeline.json', function(error, tweets, response) {
        if(error) {
            console.log('error', error);
        }
        console.log('tweets', tweets);  // The favorites. 
        console.log(response);  // Raw response object. 
      });
}

  if(liriCommand === "spotify-this-song") {

    var songName = process.argv[3];
  
    spotifyClient.search({ type: 'track', query: songName, limit: 1}, function(err, data) {
      if (err) {
        return console.log('Error occurred: ' + err);
      }
     
    console.log("song", data.tracks.items[0]); 
    });
  }

if(liriCommand === "movie-this") {
    var movieName = process.argv[3];

    var queryUrl = "http://www.omdbapi.com/?apikey=c9c28c3b&t=" + movieName;
    
    request(queryUrl, function (error, response, body) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
}

if(liriCommand === "do-what-it-says") {
    var file = process.argv[2];

    fs.readFile('random.txt', function (err, data) {

    console.log(file);
    });
}