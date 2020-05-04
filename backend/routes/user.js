var express               = require("express"),
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    bodyParser            = require("body-parser"),
    User                  = require("../models/user.js"),
    LocalStrategy         = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");

const app = express.Router()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Secret",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret",isLoggedIn, function(req, res){
    res.render("secret"); 
 });
 
 // Auth Routes
 
 //show sign up form
 app.get("/register", function(req, res){
    res.render("register"); 
 });
 //handling user sign up
 app.post("/register", function(req, res){
     User.register(new User({username: req.body.username , email:req.body.email}), req.body.password, function(err, user){
         if(err){
             console.log(err);
             return res.json({response:0});
         }
         passport.authenticate("local")(req, res, function(){
            res.json({response:1});
         });
     });
 });
 
 // LOGIN ROUTES
 //render login form
 app.get("/login", function(req, res){
    res.render("login"); 
 });
 //login logic
 //middleware
 app.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json({response : 0}); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send({response : 1});
      });
    })(req, res, next);
  });
 app.get("/logout", function(req, res){
     req.logout();
     res.redirect("/");
 });
 
 app.get("/isLoggedIn",function(req,res){
    if(req.isAuthenticated()){
        res.json({response:1});
    }
    else{
        res.json({response:0});
    }
 });
 function isLoggedIn(req, res, next){
     if(req.isAuthenticated()){
         return next();
     }
     res.redirect("/login");
 }

 module.exports = app
