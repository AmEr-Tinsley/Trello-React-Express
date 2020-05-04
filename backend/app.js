var express               = require("express"),
    mongoose              = require("mongoose"),
    bodyParser            = require("body-parser");

mongoose.connect("mongodb://localhost:27017/trelloDB",{useNewUrlParser:true});

const app = express()

app.set('view engine', 'ejs');
var User = require('./routes/user');
app.use('/',User)

const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))