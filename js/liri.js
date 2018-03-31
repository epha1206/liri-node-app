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