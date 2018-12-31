/*
 The primary file for the API
*/

//Dependencies
var server = require('./server');

//Declare the app
var app = {};

//Initialize the app
app.init = function(){
	//Start the server
	server.init();
};

//Execute 
app.init();

//Export the app
module.exports = app;