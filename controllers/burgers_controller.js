const express = require("express");
let burger = require("../models/burger");

let router = express.Router();

router.get("/", function(req,res){
    burger.allBurgers(function(data){
        let listOfBurgers = { burgers: data }
        console.log(data);
        res.render("index", listOfBurgers);
    })
});


module.exports = router;