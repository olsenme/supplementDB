//var http = require('http');
var express = require('express');
var app = express();
var logger = require('./logger');
/*function requestHandler(req,res){
    console.log("Request received");
    console.log(" -method", req.method);
    console.log(" -url", req.url);
    console.log("-headers", req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<body>");
    res.write("<h1>Welcome to my application</h1>");
    res.write("</body>");
    res.write("</html>");
    res.end();
}*/
app.use(logger);
app.use(express.static('public'));
/*app.get("/",function(req,res){
    var content = "<html><body><h1>Our server is working!</h1></body></html>";
    res.status(200).send(content);
});*/
/*app.get("*",function(req,res,next){
    res.status(404);
    res.send("The page you requested could not be found.");

}*/
//var server = http.createServer(requestHandler);
app.listen('5000', function(err){
    if(err){
        throw err;
    }
        console.log("Server is listening on port 5000");
});
