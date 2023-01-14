var mysql = require("mysql");

const pool = mysql.createPool({
    host: 'localhost',
    user: 'newuser',
    port: 3306,
    password: 'Root@1234',
    database: 'exam'
    // waitForConnections:true
})
// connection.connect(function(err,result){
//     if(err){
//         console.log("error... can't connect with DB");
//     }
//     console.log("connectio done");
// });

module.exports= pool;