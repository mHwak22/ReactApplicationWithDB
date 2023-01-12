//Step(a.)
var express = require("express");
var mongoose = require("mongoose");

//Step(b.)
var schema = mongoose.Schema;

//step(c.)
var router = express.Router();

//step(d.)
var SudentSchema = new schema({
    RollNo: "String",
    StudentName: "String",
    Course : "String",
    DOA : "String",
    Marks : "String",
    PhoneNo: "String"
});

//Step(f.)
var students = mongoose.modelNames("Student",StudentSchema,"Student");

//Step(g.)
//display by get method
router.get("/",function(req,resp){
    students.find().pretty().exce(function(err,data){
        if(err){
            resp.status(500).send("no Data Found in DataBase")
        }
        resp.send(data)
    })
});
//display my post method
router.post("/home",function(res,resp){
    var studentOb = new students({RollNo:req.body.RollNo, StudentName:req.body.StudentName, Course
})