const axios = require("axios")

let API_KEY = "iZb51ZEET5ah4q1gWFnm9fwAVux3huU5I3XYfWfi4w7vXqHKd3t7DmdZB6yspSfVMS2VaqOoYzqT10QDDtCymNEs3wByrrIB41o81jbAdBByQWOkqUSX5IFEwFMMYHYx"

// REST
let yelpREST = axios.create({
  baseURL: "https://api.yelp.com/v3/",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
})

// Using the yelpREST helper we defined earlier
yelpREST("/businesses/search", {
    params: {
      location: "San Francisco",
      term: "ramen",
      limit: 10,
    },
  }).then(({ data }) => {
    let { businesses } = data
    businesses.forEach((b) => {
      console.log("Name: ", b.name)
    })
  })