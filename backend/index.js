const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { response } = require('express');

const axios = require("axios")

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.json());
app.use(express(express.json()))

let API_KEY = "iZb51ZEET5ah4q1gWFnm9fwAVux3huU5I3XYfWfi4w7vXqHKd3t7DmdZB6yspSfVMS2VaqOoYzqT10QDDtCymNEs3wByrrIB41o81jbAdBByQWOkqUSX5IFEwFMMYHYx"

// YELP API STUFF
async function yelpREST(location) {
  return axios.get("https://api.yelp.com/v3/businesses/search", {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-type": "application/json",
    },
    params: {
      location: location,
      term: "ramen",
      limit: 1,
    }})
    .then(({data}) => {
      return data.businesses[0].name;
    })
    .catch((err) => {
      console.log('error', err)
    });
}

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/yelp_req', async (req, res) => {
  const location = req.body.location;
  var yelp_res = await yelpREST(location);

  res.status(200).send({name: yelp_res});
});

// SERVER HOSTING
app.listen(3001, function() {
  console.log('we are on 3001');
})