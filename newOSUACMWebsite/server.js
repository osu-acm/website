/*
 * Author: Joseph Noonan
 * Date: 9/27/19
 */

var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 3500;

var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    switch(req.url){
        case "/homePage":
            res.end(fs.readFileSync("homePage.html"));
            console.log("== loaded homePage.html");
            break;
        case "/officerPage":
            res.end(fs.readFileSync("officerPage.html"));
            console.log("== loaded officerPage.html");
            break;
        case "/constitutionPage":
            res.end(fs.readFileSync("constitutionPage.html"));
            console.log("== loaded constitutionPage.html");
            break;
        case "/aboutPage":
            res.end(fs.readFileSync("aboutPage.html"));
            console.log("== loaded aboutPage.html");
            break;
        case "/header.css":
            res.end(fs.readFileSync("header.css"));
            console.log("== loaded header.css");
            break;
        case "/":
            res.end(fs.readFileSync("homePage.html"));
            console.log("== loaded homePage.html");
            break;
        case "/homePage.css":
                res.end(fs.readFileSync("homePage.css"));
                console.log("== loaded homePage.css");
                break;
        case "/officerPage.css":
            res.end(fs.readFileSync("officerPage.css"));
            console.log("== loaded officerPage.css");
            break;
        case "/constitutionPage.css":
            res.end(fs.readFileSync("constitutionPage.css"));
            console.log("== loaded constitutionPage.css");
            break;
        case "/aboutPage.css":
            res.end(fs.readFileSync("aboutPage.css"));
            console.log("== loaded aboutPage.css");
            break;             
        default:
            res.end(fs.readFileSync("404.html"));
            res.statusCode = 404;
            console.log("== loaded 404.html");
            break;
    }
});

server.listen(port, function(err) {
    if (err) {
        throw err;
    }
    console.log("== Server is listening on port", port);
});