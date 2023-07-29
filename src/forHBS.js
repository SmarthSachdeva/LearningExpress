const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const PORT = 9000;

// to set the view engine type
app.set("view engine" , "hbs");
app.set('views' , path.join(__dirname , '../templates/views'))
hbs.registerPartials(path.join(__dirname , '../templates/partials'));
// var staticPath = path.join(__dirname , "../views")
// app.use(express.static(staticPath))

// template engine
app.get("" , (req , res)=>{
    res.render('index');
});

app.listen(PORT , ()=>{
    console.log(`listening on port : ${PORT}`);
})