var logger = require('./logger');
var express = require('express');
var exphbs = require('express-handlebars');
var productData = require('./productData');

var app = express();

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.use(logger);
app.use(express.static('public'));

app.get('/', function(req,res,next){
res.render('productPage',{productData:productData});
});
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
