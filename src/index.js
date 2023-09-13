// this file includes very basics of express, how to create its
// server 

const express = require("express");
const path = require('path');
const app = express();

var staticPath = path.join(__dirname , "../public");
 // built in middleware 
app.use(express.static(staticPath));


app.get("/" , (req , res) => {

    res.send("Hello from express");

});
 // The callback function has 2 params , req & res
 // The req represents HTTP req and
 // has properties for the request query string , param , body,
 // HTTP headers , etc.

 // Similarly , the response object represents the HTTP res
 // that the Express app sends when it receives an HTTP req

 app.listen(3000 , ()=>{
    console.log("running on port 3000");
 })