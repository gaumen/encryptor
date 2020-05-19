var express=require("express");
var app=express();
var bodyParser=require("body-parser");
//const request = require('request');
const assert = require('assert');

//SETUP
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

//ROUTES
app.get("/",function(req,res){
    res.render("home");
});

app.post("/encrypt", function(req,res){
  const data=req.body.data;
  lst=[];
  for (var i = 0; i < data.length; i++) {
    lst.push(data.charCodeAt(i)+3);
  }
  res.render("show", {lst:lst});
});


//CREATE THE WEB SERVER AT SPECIFIED PORT
app.listen(3000,function(){
   console.log("Server started"); 
});
