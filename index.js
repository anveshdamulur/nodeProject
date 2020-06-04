let express = require("express");
let bodyParser = require("body-parser");

let fs = require("fs");
let app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/home", function (req, res) {
  let rawdata = fs.readFileSync("./data.json");
let data = JSON.parse(rawdata);
  let allData = data.Brands;
  console.log(allData);
  let x = req.body.nani;
 console.log(x);
  res.render("index",{allData : allData})
 });



app.listen( 3000, function () {
  console.log("server is running");
});
