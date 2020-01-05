const express = require('express')
const app = express()

const http = require('http');
// hostname is IPv4
const hostname = '192.168.43.246'
const port = 1234

 // Connectiong monk in localhost:27017 folder mydb
 const db = require('monk')('localhost:27017/mydb')
 // use collection in collection customers
 const collection = db.get('customers')

var x 
var y 
var i 

app.get('/', function(req, res) {
  //res.send('Noppanat Hi')
  x = Math.floor(Math.random() * (1000 - 1)) + 1
  y = x.toString()
  i++
  res.send(y)
  console.log("y : "+y)
})

app.post('/', function(req, res) {
  collection.insert({id : i, values : y})
  res.send('add sucesses')
})

// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min
// }

app.listen(port, hostname,()=>{
  console.log(`Running Now At http//${hostname}:${port}`)
})