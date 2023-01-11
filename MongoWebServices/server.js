//STEP (a.)
var express = require("express");
var server = express(); // creating object of express
var bodyparser= require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
const { Console } = require("console");
const { setServers } = require("dns");

//STEP(b.)
mongoose.Promise=global.Promise;

//STEP(c.)
const url = "mongodb://0.0.0.0:27017//StudentDB";

//STEP(d.)
mongoose.connect(url,{
                    connectTimeoutMS:1000
}, function(err, result){
    if(err){
console.log("Error Occured ... Connection not created with DB");
console.log(err)
    }
    console.log("Connection created eith DB sucessfully");
})

//STEP(e.)
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({
                                extended :true
}));
server.use(express.static(path.join(__dirname,"public")));
//DEFINEING CORS
server.use(function(req,resp,next){
    resp.setHeader('Access-Control-Allow-Origin','*');
    resp.setHeader('Access-Control-Allow-Method','GET,POST,PUT,DELETE');
    resp.setHeader('Access-Control-Allow-Credentials', true);
    resp.setHeader('Access-Control-Allow-Headers','Content-Type');
});

//STEP(f.)
var routers = require("./Routers/routers.js");
server.use("/",routers);

//STEP(g.)
server.listen(4000);
console.log("Server is listening at Port no 4000";)
