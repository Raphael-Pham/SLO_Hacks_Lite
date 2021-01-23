const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3001, function() {
  console.log('we are on 3001');
})