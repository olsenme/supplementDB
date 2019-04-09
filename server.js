var mongoDatabase = null;
const Supplement = require('./models/supplements');
//require('dotenv').config();
var logger = require('./logger');
var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');
var productData = require('./productData');
var MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.DATABASE;

mongoose.connect('mongodb://localhost:27017/supplementDB', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected!');
});
//const url = 'mongodb://localhost:27017';
//const url = 'mongodb://<' + mongoUser + '>:<'+ mongoPassword '>@<' + mongoHost + '>:' + mongoPort + '>/<' + mongoDBName + '>';
//console.log(url);
//const uri = "mongodb+srv://olsenme:<hunters>@cluster0-ctawm.mongodb.net/test?retryWrites=true";
/*const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("supplementDB").collection("supplements");
  if(err){
      console.log(err);

  }
  else {
      console.log('We are connected');
  }
  // perform actions on the collection object
  client.close();
});*/


var app = express();

app.engine('handlebars',exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.json());

app.use(logger);
app.use(express.static('public'));
/*MongoClient.connect(url, {useNewUrlParser:true}, function(err,db) {
    if(!err){
        console.log('We are connected');
    }
    else {
        console.log('Error connecting to db' + err);
    }
});*/

//const client = new MongoClient(uri,{useNewUrlParser:true});
//client.connect(err => {
  //const collection = client.db("supplementDB").collection("supplements");
  // perform actions on the collection object
  //client.close();
//});

 app.listen(5000, () => {
     console.log(`Server is listening on port 5000`);
 });

//});

app.get('/', function(req,res,next){
//res.render('productPage',{productData:productData});
/*var supplementCollection = mongoDatabase.collection('supplements').find();

supplementCollection.toArray((err,results) =>
{
    if(err)
    {
        console.log(err);
        res.status(500).send("Error connecting to db");
    }
    console.log(results);
    res.status(200).render('productPage',{
        productData:results
    });*/


    /*if(err){
        res.status(500).send("error connecting to db");
    }

});*/
Supplement.find().then(
    (results, err) => {
        res.status(200).render('productPage',{
            productData:results

    })
    if(err) {
        res.status(400).send("error connecting to db");
    }
});

});
app.post('/:name/addSupplement', function(req,res){
    if(req.body && req.body.name && req.body.url &&  req.body.rating && req.body.quantity && req.body.price && req.body.description)
    {
        /*console.log("adding",req.params.name);
        console.log("url",req.body.url);
        console.log("rating",req.body.rating);
        console.log("quantity",req.body.quantity);
        console.log("price",req.body.price);
        console.log("description",req.body.description);*/
        /*var supplementCollection = mongoDatabase.collection('supplements');
        db.insertOne({
            name:req.body.name,
            url: req.body.url,
            rating: req.body.rating,
            quantity: req.body.quantity,
            price:  req.body.price,
            description: req.body.description
        }, function(err, result){
            if(err) {
                res.status(500).send("Error saving new supplement");
            }
            else if(result.ops[0]<1){
                res.status(500).send("Error saving to database");
            }
            else {
                res.status(200).send("Success");
            }

        });
    }
    else {
        res.status(400).send("Requests must contain all fields");
    }
});*/
        const supplement = new Supplement({
            name: req.body.name,
            url: req.body.url,
            rating: req.body.rating,
            quantity: req.body.quantity,
            price: req.body.price,
            description: req.body.description
        });
        supplement.save().then(
            () => {
                res.status(200).json({
                    message: 'post saved sucessfully'
                });
            }).catch(
                (error) => {
                    res.status(400).json({
                        error:error});
                    });

    }
    else {
        res.status(400).send("Requests must contain all fields");
    }
});


app.get("*",function(req,res,next){
    res.status(404);
    res.send("The page you requested could not be found.");
});
