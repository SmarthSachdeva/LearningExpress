const express = require("express");
const app = express();

app.get("/" , (req , res)=>{
    res.send("<h1>welcome to home page</h1>");
});
app.get("/contact" , (req , res)=>{
    res.send("contact page");
});
app.get("/temp" , (req , res)=>{
    res.send({
        id:1,
        name:"smarth",
    });
});

app.listen(3001 , ()=>{
    console.log("running on port 3000");
})