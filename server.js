var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");


var connection = require('./config/connection.js');


var app = express();
var port = 3000;


app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);



app.listen(port);



