const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// EJS setup
app.set("view engine", "ejs");

// Custom views folder path
app.set("views", path.join(__dirname, "View"));

// Route
app.get("/", (req, res) => {
  res.render("home");
});

//Instagram Activity

app.get ("/:username" , (req,res) => {
  let Followers = ["Shoaib" , "Shabbir" , "Nasir" , "Saeed"]
    let {username} = req.params;
    res.render("instagram.ejs" , {username , Followers})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// Conditional Statement In Ejs

// app.get("/rolldice", (req, res) => {

//     let diceVal = Math.floor(Math.random() * 6) + 1;

//     res.render("rolldice.ejs", { diceVal });

// });