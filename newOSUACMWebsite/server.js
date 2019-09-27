/*
 * Author: Joseph Noonan
 * Date: 9/27/19
 */

var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3500;

app.use(express.static('public'));

app.get(['/', '/homePage.html'], function(req, res, next) {
    res.status(200).render('homePage');
});