//=========PACKAGES=================================
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var request = require("request");
var methodOverride = require ("method-override");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/blog_app', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);


//=========PACKAGES CONT.===========================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

//=========VAR's====================================



//=========SCHEMA SETUP=============================
var todoSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Todo = mongoose.model("Todo", todoSchema);

Todo.create(
    {
        name: "Granite Hill",
        image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
        description: "This is a huge granite hill, no bathrooms, no water, beautiful granite."
    },
    function (err, campground) {
        if (err) {
            console.log(err);
        } else {
            console.log("NEWLY CREATED CAMPGROUND: ");
            console.log(campground);
        }
    }
);
//=========HOMEPAGE=================================
//replave "/blogs" with whatever the index route is
app.get("/", function (req, res) {
    res.redirect("/todos")
});
//=========ROUTES===================================













//=========* PAGE===================================
app.get("*", function (req, res) {
    res.send("YOU ARE A STAR!!!")
});
//=========SERVER===================================
app.listen(port, function () {
    console.log("Server Has Started!");
});
