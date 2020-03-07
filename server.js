const express = require('express');
const app = express();
const PORT = 3000;
const path = require("path");
//const routes = require("./routes");

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

//app.use(routes);


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + ".public/index.html"));
});

app.listen(PORT, function() {
    console.log("Application listening on " + PORT);
});