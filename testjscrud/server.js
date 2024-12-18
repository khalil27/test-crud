var express = require('express');
var HotelRouter = require('./controllers/HotelController')
const app = express();
const path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test_db_crud').then(()=>
 { 
    console.log("DB connected");
 })
.catch((err)=>{
    console.log(err)
});

app.use(express.json())
app.use('/Hotel',HotelRouter) 

var http = require('http')
var server = http.createServer(app)
server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})