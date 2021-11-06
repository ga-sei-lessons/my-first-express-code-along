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

/**
 * (http://)              (www.example.com)   (/users/:userId/comments/:commentId)          (?)                          search=recent   & otherQuery=value
 * (the protocol to use)  (host/domain)       (request parameters -- path to the resource)   (starts the query strings)  (key=value pairs)
 * https://www.hulu.com/watch/49af3f2f-6ced-4716-94fe-5002008651f2
 * query strings are used on GET request (for instance a search term)
 * https://www.google.com/search?q=mango
 */

// example query string for searching on a get request
app.get('/search', (req, res) => {
  console.log(req.query) // all query strings come in on the req.query (req.body) (req.headers)
  res.json({ q: req.query.q })
})

// /:variableName -- is like creating a variable in express
// 'compound route' with more that one variable -- /:variable1/:varaible2
app.get('/watch/:id', (req, res) => {
  console.log(req.params) // all of the request parameters
  // look up the req.params.id in the datavase -- send information from the database to the client
  res.json({ id: req.params.id })
})

// READ one comment by one user
app.get('/users/:userId/comments/:commentId', (req, res) => {
  console.log(req.params)
  res.json({ msg: 'look up user id and comment id' })
})

//takes two route params /:x/:y and adds them together
app.get('/calc/:x/:y', (req, res) => {
  // take the route params x and y and add them (after turing the strings into numbers)
  // /calc/5/10 -- response should be 15 
  const x = parseInt(req.params.x)
  const y = parseInt(req.params.y)
  const sum = x + y
  // send back the result of the calculation
  res.json({ sum: sum })
})

// tell express what port to listen on for incoming requests
app.listen(port, () => {
  console.log(`listening to the smooth sounds of port ${port} in the morning 🌊`)
  // handle errors
  // connect to a database
  // console log some stuff
})