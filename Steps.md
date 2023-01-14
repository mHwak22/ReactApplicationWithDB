##Steps for Creating a FULLSTACK web Application using MERN stack
----DATABASE----
1. Create new DataBase (i'm using MongoDB as DB for this project..)
2. Insert data into Collection
----in mongo(creating db)---

use StudentDB;

db.Student.insert({
    Roll_No:"101",
    Student_Name:"Mayur",
    Course:"PG-DAC", 
    DOA:"15-03-2022", 
    Marks:"182", 
    Phone_No:"8369574210"});
insert into StudentDetails values(101,'Mayur','PG-DAC','2022-03-15',182,'8369574210');
insert into StudentDetails values(102,'Ganesh','PG-DBDA','2022-03-17',100,'8369574210');
insert into StudentDetails values(103,'Swapanli','PG-DTITS','2022-03-18',156,'8369574210');

db.Student.insert({
    Roll_No:"102",
    Student_Name:"Ganesh",
    Course:"PG-DBDA", 
    DOA:"17-03-2022", 
    Marks:"145", 
    Phone_No:"8369574220"});

db.Student.insert({
    Roll_No:"103"
    Student_Name:"Swapanali",
    Course:"PG-DTISS", 
    DOA:"19-03-2022", 
    Marks:"166", 
    Phone_No:"8369578210"});

db.Student.insert({
    Roll_No:"104",
    Student_Name:"Aditya",
    Course:"PG-DAC", 
    DOA:"15-03-2022", 
    Marks:"172", 
    Phone_No:"8354574210"});

db.Student.insert({
    Roll_No:"105",
    Student_Name:"kavita",
    Course:"PG-DBDA", 
    DOA:"17-03-2022", 
    Marks:"162", 
    Phone_No:"8332574210"});

---ANOTHER COLLECTION(in same DB)---
db.StudentLogin.insert({
    Roll_No:"101",
    Password:"Ma123"
    });

db.StudentLogin.insert({
    Roll_No:"102",
    Password:"Ga123"
    });

db.StudentLogin.insert({
    Roll_No:"103",
    Password:"Sw123"
    });


-----MONGOWEBSERVERICE (Node+Express)-----
 1. Create a Folder for MongoWebService..
------Commands in CMD -----
(inside THAT FOLDER)
    a. npm init ----(Package.json file will get created)
    b. npm install express 
    c. npm install body-parser
    d. npm install mongoose/mysql ------for sql
    e. npm install mongodb 

2. Create Server.js file .... and wrtie code which will run on the server and will conntect with the Routes for Curd Operations
-----in server.js file-----
    a. import all the packages eg.-> espress(create its object -- server), body-parser, path,mongodb, mongoose( create global Promise )
    b. create Mongoose Promise
    c. create Connection with DataBase(url)
    d. create Connection Asynchronously
    e. define MidleWares and the CORS 
3. Create Routers folder which will contain the route file
    f. import Routes and define router
    g. make server listening on defined port no.
    h. exprot the server.js(module.exports= server)


4. Create router.js file which will route the url request and respond accordingly
----in routers.js file----
    a. import all the packages eg. -->express, mongoose
    b. create schema variable from the mongoose.Schema function..
    c. create router variable from the express.Router to use router functions
    d. create Schema using schema (USE STRING DATA TYPE).
    e. create model and store it in and variable
    f. write return method for GET,POST,PUT,DELETE(header Methods)
    g. exprot the routers.js(module.exports= routers)

-----REACT ROUTING AND CONNTECTIONG IT WITH AXIOUS-----
----in Command Proment cmds for React---
    a. npm install create-react-app -save
    b. create-react-app <filename>(filename should be on small case only)
    c. npm install react-router-dom (version: 5.3.3)
    d. npm install axios 
    e. npm install react-bootstrap
    f. npm install react-dom
    g. npm intall react-bootstrap-icon

1. Create Componet Folder
    A. create class  ---StudentServices.js--(here will connect mongowebservices)
        i.   import axios 
        ii.  write class, class name shold be same as component name.
        iii. create constructor-- and set the baseUrl= the url of webservice
        iv.  write method for getdata method to get data from webservice or DB(for GET,POST,DELET,PUT)
        v.   return constructor (export default new StudentServices();)
    B. create functional component --- StudentList.js --- (here we will display data)
        i.   write function for StudentList(){..... return(......)}
        ii.  write functions for additional functions..
    C. Similar to Step B for other Functional Components
