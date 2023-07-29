const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

var staticPath = path.join(__dirname , '../public');
app.use(express.static(staticPath));
app.get('/' , (req , res)=>{
    res.send(staticPath)
});
app.listen(PORT , ()=>{
    console.log(`App is listening on port number = ${PORT}`);
    console.log(path.dirname);
})