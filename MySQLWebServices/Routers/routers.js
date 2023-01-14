//Step(a.)
var express = require("express");
var mongoose = require("mysql");

//step(c.)
var router = express.Router();

//Step(g.)
//display by get method
router.get("/student", function (req, resp) {
   const statement ="select * from StudentDetails " {
        if (err) {
            resp.status(500).send("no Data Found in DataBase")
        }
        resp.send(data)
    })
});
//display my post method
router.post("/Register", function (req, resp) {
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