const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { response } = require('express');

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(express(express.json()))

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/yelp_req', (req, res) => {
  const thislocation = req.body.location;
  console.log(thislocation);
  // do whatever you guys want with the results
  res.send({ location: thislocation})
});


app.listen(3001, function() {
  console.log('we are on 3001');
})