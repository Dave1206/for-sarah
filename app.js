const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/heartsDB", {useNewUrlParser: true});

app.get("/", function(req,res){
  res.render("index.html");
});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
