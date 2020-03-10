//=========PACKAGES=================================
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require("body-parser");
var request = require("request");
var methodOverride = require ("method-override");
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/todo_app', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);


//=========PACKAGES CONT.===========================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

//=========VAR's====================================



//=========SCHEMA SETUP=============================
var todoSchema = new mongoose.Schema({
    todo: String,
    details: String
});

var Todo = mongoose.model("Todo", todoSchema);

//HARD CODE TODO TO CHECK DB 
// Todo.create(
//     {
//         todo: "Walk Dogs",
//         details: "Take dogs for walk, a couple of blocks minimum."
//     },
//     function (err, todo) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED TODO: ");
//             console.log(todo);
//         }
//     }
// );
//=========HOMEPAGE=================================
app.get("/", function (req, res) {
    res.redirect("/todos")
});
//=========ROUTES===================================

//INDEX ROUTE



//NEW ROUTE



//CREATE ROUTE



//SHOW ROUTE



//EDIT ROUTE



//UPDATE ROUTE



//DESTROY ROUTE



//=========* PAGE===================================
app.get("*", function (req, res) {
    res.send("YOU ARE A STAR!!!")
});
//=========SERVER===================================
app.listen(port, function () {
    console.log("Server Has Started!");
});
