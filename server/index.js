// Require express to then use it
const express = require('express');

// invoke express to create express obj 
const app = express();

// controller functions

// 1. html res

app.get('/', (req,res) => {
  res.send(`<h1> Welcome </h1>`)
})

// 2. html res -> Uses query 
app.get('/home', (req,res) => {
  console.log(req.query)
  const name = req.query.name || "stranger"
  res.send(`<h1> Welcome home ${name} </h1>`)
})

// 1. data res
app.get('/api/hello', (req,res) => {
  const name = req.query.name || "stranger"
  res.send(`Hello ${name}`);
})

// 2. data res -> Uses query

app.get('/api/data', (req,res) => {
  res.send(["itzel","ben", "gonzalo", "zo", "carmen"])
})

// Define port number
const port = 8080;

// Add listener to listen for incoming requests
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})