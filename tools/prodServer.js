// METHOD 1 - Create a separate HTTP SERVER to serve content
const http = require('http')
const express = require('express')
import path from 'path'

const app = express()

// static directory
app.use(express.static(path.resolve(__dirname + "/../build/")))

// create a path in our backend.
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/../build/index.html"))
});

app.listen(8080)
// http.createServer(function (req, res) {
//     res.sendfile('build/index.html'); //write a response to the client
// }).listen(8080);