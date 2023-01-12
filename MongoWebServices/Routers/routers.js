//Step(a.)
var express = require("express");
var mongoose = require("mongoose");

//Step(b.)
var schema = mongoose.Schema;

//step(c.)
var router = express.Router();

//step(d.)
var SudentSchema = new schema({
    Roll_No: "String",
    Student_Name: "String",
    Course: "String",
    DOA: "String",
    Marks: "String",
    Phone_No: "String"
});

//Step(f.)
var students = mongoose.modelNames("Student", StudentSchema, "Student");

//Step(g.)
//display by get method
router.get("/", function (req, resp) {
    students.find().pretty().exce(function (err, data) {
        if (err) {
            resp.status(500).send("no Data Found in DataBase")
        }
        resp.send(data)
    })
});
//display my post method
router.post("/home", function (res, resp) {
    var studentOb = new students({ Roll_No: req.body.Roll_No, Student_Name: req.body.Student_Name, Course: req.body.Course, DOA: req.body.DOA, Marks: req.body.Marks, Phone_No: req.body.Phone_No });
    studentOb.save(function (err, data) {
        if (err) {
            resp.status(500).send("No Data Found in Database")
        }
        resp.send(data)
    });
});