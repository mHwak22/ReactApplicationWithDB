# ReactApplicationWithDB
 Connecting react application with database

----DATABASE----
1. Create new DataBase (i'm using MongoDB as DB for this project..)
2. Insert data into Collection
----in mongo(creating db)---
use StudentDB;
db.Student.insert({
    "Roll No":"101",
    "Student Name":"Mayur",
    "Course:"PG-DAC", 
    "DOA:"15-03-2022", 
    "Marks:"182", 
    "Phone No:"8369574210"});
"
db.Student.insert({
    "Roll No":"102",
    "Student Name":"Ganesh",
    "Course":"PG-DBDA", 
    "DOA":"17-03-2022", 
    "Marks":"145", 
    "Phone No":"8369574220"});

db.Student.insert({
    "Roll No":"103",
    "Student Name":"Swapanali",
    "Course":"PG-DTISS", 
    "DOA":"19-03-2022", 
    "Marks":"166", 
    "Phone No":"8369578210"});

db.Student.insert({
    "Roll No":"104",
    "Student Name":"Aditya",
    "Course":"PG-DAC", 
    "DOA":"15-03-2022", 
    "Marks":"172", 
    "Phone No":"8354574210"});

db.Student.insert({
    "Roll No":"105",
    "Student Name":"kavita",
    "Course":"PG-DBDA", 
    "DOA":"17-03-2022", 
    "Marks":"162", 
    "Phone No":"8332574210"});


-----MONGOWEBSERVERICE (Node+Express)-----
 1. Create a Folder for MongoWebService..
------Commands in CMD -----
(inside THAT FOLDER)
    a. npm init ----(Package.json file will get created)
    b. npm install express 
    c. npm install body-parser
    d. npm install mongodb 
    e. npm install mongoose

2. Create Server.js file .... and wrtie code which will run on the server and will conntect with the Routes for Curd Operations
-----in Server.js file-----
    a. import all the packeages eg.-> espress(create its object -- server), body-parser, path, mongoose( create global Promise )
    b. create Mongoose Promise
    c. create Connection with DataBase(url)
    d. create Connection Asynchronously
    e. define MidleWares and the CORS 
3. Create Routers folder which will contain the route file
    f. import Routes and define router
    g. make server listening on defined port no.


4. Create router.js file which will route the url request and respond accordingly