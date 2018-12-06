const express = require("express")
var app = express()
const hbs = require("hbs") // template engine for injecting dynamic data into pages
const port = process.env.PORT || 3000
app.set("view engine","hbs")
//app.use(express.static(__dirname + path for file)) - for loading external html css files
hbs.registerPartials(__dirname + "/Views/partials")
//app.use() refer middleware latera
hbs.registerHelper("currentYear",()=>{
  return new Date().getFullYear() // to pass in parameters use space beside function in html file
})
app.get("/bad",(req,res)=>{
  res.send({
    error: "bad request",
    message: "Check connection"
  })
})
app.get("/",(req,res)=>{
  res.render("about.hbs",{ //rendering dynamic templates
    pageTitle: "My First Page",
    message: "Middle Finger",
  })
})
app.listen(port)
