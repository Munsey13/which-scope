const express = require('express');
const app = express();
const exphbs = require("express-handlbars");
const PORT = 3000;

app.engine("handlebars", exphbs({
    defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("Application listening on " + PORT);
});