//Step(a.)
var express = require("express");
var mongoose = require("mongoose");

//Step(b.)
var schema = mongoose.Schema;

//step(c.)
var router = express.Router();

//step(d.)
var SudentSchema = new schema({
    "Roll No": "String",
    "Student Name": "String",
    Course : "String",
    DOA : "String",
    Marks : "String",
    "Phone NO": "String"
});

//Step(f.)
var students = mongoose.modelNames("Student",StudentSchema,"Student");

//Step(g.)
router.get("/",function(req,resp){
    students.find().pretty().exce(function(err,data){
        if(err){
            resp.status(500).send("no Data Found in DataBase")
        }
        resp.send(data)
    })
});