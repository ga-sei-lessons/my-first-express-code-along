// require the express module
const express = require('express')

// create a new express app
const app = express()
const port = 3001 

// define some HTTP routes for express to respond to
// request -- comes from the 'client'
// response -- sent from the server back to the client
app.get('/', (req, res) => {
  res.send('<h1>Hello Express! 👾</h1>') // res.send() sends over html or text
})

// GET request /about -- respond with json data
app.get('/about', (req, res) => {
  // send some JSON data back
  res.json({ message: 'this is a practice express app!' })
})

// tell express what port to listen on for incoming requests
app.listen(port, () => {
  console.log(`listening to the smooth sounds of port ${port} in the morning 🌊`)
  // handle errors
  // connect to a database
  // console log some stuff
})