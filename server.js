var mongoDatabase = null;
const Supplement = require('./models/supplements');

var dotenv = require('dotenv');
var logger = require('./logger');
var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
var productData = require('./productData');
var MongoClient = require('mongodb').MongoClient;

dotenv.config();
var app = express();
app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());

app.use(logger);
app.use(express.static('public'));
var port = process.env.PORT || 5000;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;


var url = 'mongodb://'+ mongoUser + ':' + mongoPassword + '@'+ mongoHost + ':' + mongoPort + '/' + mongoDBName;
console.log(url);

MongoClient.connect(url,{useNewUrlParser:true},function(err,client){
  if(err){
    throw err;
  }
  mongoDatabase = client.db(mongoDBName);
  app.listen(port,function(){
    console.log("Server listening on port",port);
  });

});

app.get('/', function(req,res,next){
var supplement = mongoDatabase.collection('supplements');
var supplementCursor = supplement.find();

supplementCursor.toArray((err,results) =>
{
    if(err)
    {
        console.log(err);
        res.status(500).send("Error connecting to db");
    }
    else{
    console.log(results);
    res.status(200).render('productPage',{
        productData:results
    });
  }
});
});
/*app.post('/addSupplement', function(req,res){
  if(req.body && req.body.name && req.body.url && req.body.quantity && req.body.price && req.body.description)
    {
        console.log("adding",req.body.name);
        console.log("url",req.body.url);
        //console.log("rating",req.body.rating);
        console.log("quantity",req.body.quantity);
        console.log("price",req.body.price);
        console.log("description",req.body.description);
        res.status(200).send("Supplement successfully added");
        var supplementCollection = mongoDatabase.collection('supplements');
        try{
            supplementCollection.insertOne({
            name:req.body.name,
            url: req.body.url,
          //  rating: req.body.rating,
            quantity: req.body.quantity,
            price:  req.body.price,
            description: req.body.description
          });
          res.status(200).send();
        }
        catch(e){
        console.log(e);
        res.status(500).send("Error inserting into db");
        };
  }
  else {
        res.status(400).send("Requests must contain JSON body with all fields");
       }
});*/
app.get('/about', function(req,res,next){
  res.status(200).render('about');
});
app.get('/contact', function(req,res,next){
  res.status(200).render('contact');
});

app.get("*",function(req,res,next){
    res.status(404);
    res.send("The page you requested could not be found.");
});
