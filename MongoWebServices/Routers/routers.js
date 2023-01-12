//Step(a.)
var express = require("express");
var mongoose = require("mongoose");

//Step(b.)
var schemas = mongoose.Schema;

//step(c.)
var router = express.Router();

//step(d.)
var studentSchema = new schemas({
    Roll_No: String,
    Student_Name: String,
    Course: String,
    DOA: String,
    Marks: String,
    Phone_No: String
});

var studentLoginSchema = new schemas({
    Roll_No:String,
    Password:String
})

//Step(f.)
var students = mongoose.model('Student', studentSchema,'Student');
var studentLogins = mongoose.model('StudentLogin', studentLoginSchema,'StudentLogin');



//Step(g.)
//display by get method
router.get("/", function (req, resp) {
    students.find().exec(function (err, data) {
        if (err) {
            resp.status(500).send("no Data Found in DataBase")
        }
        resp.send(data)
    })
});
//display my post method
router.post("/home", function (req, resp) {
    var studentOb = new students({ Roll_No: req.body.Roll_No, Student_Name: req.body.Student_Name, Course: req.body.Course, DOA: req.body.DOA, Marks: req.body.Marks, Phone_No: req.body.Phone_No });
    studentOb.save(function (err, data) {
        if (err) {
            resp.status(500).send("No Data Found in Database")
        }
        resp.send(data)
    });
});
//Login Collection data
router.get("/login", function (req, resp) {
    studentLogins.find().exec(function (err, data) {
        if (err) {
            resp.status(500).send("no Data Found in DataBase")
        }
        resp.send(data)
    })
});

//Login validations
router.post("/validation",function(req, resp){
    // var studLoginOb = new studentLogins({Roll_No:req.body.Roll_No,Password:req.body.Password});
    studentLoginSchema.findOne({Roll_No: req.body.Roll_No},function(err,data){
        if(err){
            resp.status(500).send("no data found")
        }
        
        resp.send(data);
    })

})


module.exports=router;