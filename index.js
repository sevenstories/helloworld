var express = require('express');

var app = express();

app.get('/',function(req, res){
    res.send("hello world!, your ip is" + req.connection.remoteAddress);
});


app.listen(3000);