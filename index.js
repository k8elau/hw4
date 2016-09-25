//this is the same as
//var app = require('express')();
//use nodemon fileName to run in terminal

var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('<h1>Home Page</h1>')
});

app.get('/profile/:name', function(req, res){
    res.status(200);
    //tells the browser the type is json
    res.type('json');
    res.send({
        name: req.params.name
    });
});


app.get('/random', function(req,res){
        res.send(String(Math.random()));
        });

//move api project into public directory
//for homework (the dynamic route)
//make a route to like /random
//app.get('/random' etc etc)
//res.send(etc etc);



//allows user to access everyting in the public folder
app.use('/static', express.static('public'));


//catch all route (404 error if none of the above)
app.get('*', function(req, res){
    res.status(404);
    res.send('404 - Not Found');
});

//start server
app.listen(3001);

//prints in terminal
console.log('listening on port 3001');

//routing
//HTTP method + URL path -> function

//app.METHOD(PATH, HANDLER)
//app is an instance of express
//METHOD is an http request method
//PATH is a path on the server
//Handler is the function executed when the route is matched

