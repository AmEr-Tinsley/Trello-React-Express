const express = require('express')
var bodyParser =  require("body-parser");
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 5000
var namee = "amer";

/*app.get('/amer', function(req, res){
    return res.json({name : namee , age:"24"});
});
app.post('/amer', function(req, res){
    var nameee = req.body.amer.name==="mohsen" ? "amer" : "mohsen";
    console.log(nameee);
    namee = nameee;
});*/

app.listen(port, () => console.log(`Example app listening on port ${port}!`))