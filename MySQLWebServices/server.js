var express = require("express");
var bodyparser = require("body-parser");
const db = require("./db");
var cors = require("cors");
var server = express();
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root123',
//     database: 'exam'
// });
// connection.connect(function(err,result){
//     if(err){
//         console.log("error... can't connect with DB");
//     }
//     console.log("connectio done");
// });


server.use(bodyparser.json());
// server.use(bodyparser.urlencoded({extended:false}));
server.use(cors());

server.get("/student", (req, resp) => {
    const statement = "select * from StudentDetails"
    db.query(statement, function (err, data) {
        if (err) {
            console.log(err)
        }
        resp.send(data);
    })
});
server.post("/student", (req, resp) => {
    const { RollNo, Studentname, Course, DOA, marks, PhoneNo } = req.body
    const statement = `insert into StudentDetails values(${RollNo},'${Studentname}','${Course}','${DOA}',${marks},'${PhoneNo}')`
    db.query(statement, function (err, data) {
        if (err) {
            console.log(err)
        }
        resp.send(data);
    })
});

server.listen(5000);
console.log("server is listening at 5000");