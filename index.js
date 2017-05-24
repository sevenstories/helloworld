var express = require('express');

var app = express();

app.get('/',function(req, res){
    res.send("welcome to the " + process.env.SERVICE_NAME +"!");
});


app.listen(3000);