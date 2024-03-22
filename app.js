const express = require("express");
const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/country/australia"); // or any default country you want
});

app.get("/country/:name", async (req, res) => {
  let url = `http://universities.hipolabs.com/search?country=${req.params.name}`;

  let response = await fetch(url); // use the fetch method
  let unis = await response.json(); // read response body and parse as JSON
  res.render("index", { uni_data: unis, country: req.params.name });
});

app.listen(3000, () => {
  console.log("Server is listening on port localhost:3000");
});
