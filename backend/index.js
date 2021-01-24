const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');

const CONNECTION_URL = "mongodb+srv://raphaelpham14:thisisthebestpassword@food-cluster.0cgkh.mongodb.net/Food-Indecision?retryWrites=true&w=majority";
const DATABASE_NAME = "slo_hacks_lite";

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express(express.json()));

var database, collection;

app.get('/', (req, res) => {
  res.send('Hello world!')
});

// Yelp Picker:
app.post('/yelp_req', (req, res) => {
  const thislocation = req.body.location;
  console.log(thislocation);
  // do whatever you guys want with the results
  res.send({ location: thislocation})
});

// Grocery List:
app.post('/groceries_req', (req, res) => {
   groceryCol.insertOne(req.body)
      .then(result => {
         console.log(result)
      })
      .catch(error => console.error(error))
});
app.delete('/groceries_req', (req, res) => {
   groceryCol.deleteOne(
      { item: req.body.item }
   )
      .then(result => {
         res.json('Deleted grocery item')
      })
      .catch(error => console.error(error))
});
app.get('/groceries_req', (req, res) => {
   database.collection('groceryCol').find().toArray()
      .then(results => {
         console.log(results)
      })
      .catch(error => console.error(error))
});

// Ingredients List:
app.post('/ingredients_req', (req, res) => {
   ingredCol.insertOne(req.body)
      .then(result => {
         console.log(result)
      })
      .catch(error => console.error(error))
});
app.delete('/ingredients_req', (req, res) => {
   ingredCol.deleteOne(
      { item: req.body.item }
   )
      .then(result => {
         res.json('Deleted ingredient item')
      })
      .catch(error => console.error(error))
});
app.get('/ingredients_req', (req, res) => {
   database.collection('ingredCol').find().toArray()
      .then(results => {
         console.log(results)
      })
      .catch(error => console.error(error))
});

app.listen(3001, () => {
   MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
      if (error) {
         throw error;
      }
      database = client.db(DATABASE_NAME);
      groceryCol = database.collection("groceries");
      ingredCol = database.collection("ingredients");
      console.log("Connected to '" + DATABASE_NAME + "'!");
   });
});