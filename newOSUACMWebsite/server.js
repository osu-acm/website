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
        
        // HTML ----------------------------------------
        case "/homePage.html":
            res.end(fs.readFileSync("homePage.html"));
            console.log("===== loaded homePage.html =====");
            break;
        case "/officersPage.html":
            res.end(fs.readFileSync("officerPage.html"));
            console.log("===== loaded officerPage.html =====");
            break;
        case "/constitutionPage.html":
            res.end(fs.readFileSync("constitutionPage.html"));
            console.log("===== loaded constitutionPage.html =====");
            break;
        case "/aboutPage.html":
            res.end(fs.readFileSync("aboutPage.html"));
            console.log("===== loaded aboutPage.html =====");
            break;
        case "/":
            res.end(fs.readFileSync("homePage.html"));
            console.log("===== loaded homePage.html =====");
            break;

        // CSS: ------------------------------------------
        case "/header.css":
            res.end(fs.readFileSync("header.css"));
            console.log("== loaded header.css");
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

        // IMAGES: -----------------------------------
        case "/images/AidanGrimshaw.jpg":
            res.end(fs.readFileSync("images/AidanGrimshaw.jpg"));
            console.log("== loaded AidanGrimshaw.jpg");
            break;
        case "/images/BraamPhoto.jpg":
            res.end(fs.readFileSync("images/BraamPhoto.jpg"));
            console.log("== loaded BraamPhoto.jpg");
            break;
        case "/images/CalvinGagliano.jpg":
            res.end(fs.readFileSync("images/CalvinGagliano.jpg"));
            console.log("== loaded CalvinGagliano.jpg");
            break;
        case "/images/GitHubLogo.png":
            res.end(fs.readFileSync("images/GitHubLogo.png"));
            console.log("== loaded GitHubLogo.png");
            break;
        case "/images/gmailLogo.png":
            res.end(fs.readFileSync("images/gmailLogo.png"));
            console.log("== loaded gmailLogo.png");
            break;
        case "/images/googleDriveLogo.png":
            res.end(fs.readFileSync("images/googleDriveLogo.png"));
            console.log("== loaded googleDriveLogo.png");
            break;
        case "/images/JosephNoonan.jpg":
            res.end(fs.readFileSync("images/JosephNoonan.jpg"));
            console.log("== loaded JosephNoonan.jpg");
            break;
        case "/images/LinkedInLogo.png":
            res.end(fs.readFileSync("images/LinkedInLogo.png"));
            console.log("== loaded LinkedInLogo.png");
            break;
        case "/images/logo.png":
            res.end(fs.readFileSync("images/logo.png"));
            console.log("== loaded logo.png");
            break;
        case "/images/logoWithoutBorder.png":
            res.end(fs.readFileSync("images/logoWithoutBorder.png"));
            console.log("== loaded logoWithoutBorder.png");
            break;
        case "/images/mitchellSchenk.png":
            res.end(fs.readFileSync("images/mitchellSchenk.png"));
            console.log("== loaded mitchellSchenk.png");
            break;
        case "/images/slackLogo.png":
            res.end(fs.readFileSync("images/slackLogo.png"));
            console.log("== loaded slackLogo.png");
            break;

        // PDFs: ------------------------------------------
        case "/constitution.pdf":
            res.end(fs.readFileSync("constitution.pdf"));
            console.log("== loaded constitution.pdf");
            break;        

        // 404: -------------------------------------
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