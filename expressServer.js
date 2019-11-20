/*
 * Author: Joseph Noonan
 * Date: 9/27/19
 */


var express = require('express');
var app = express();
var port = process.env.PORT || 3500;

app.use(express.static('public'));
app.use(express.static('images'));


app.listen(port, () => 
    console.log("== Server is listening on port", port)
);