const express = require("express");
let burger = require("../models/burger");

let router = express.Router();

router.get("/", function(req,res){
    burger.allBurgers(function(data){
        let listOfBurgers = { burgers: data }
        console.log("we are in controller sending data to the browser using index.handlebar");
        res.render("index", listOfBurgers);
    })
});

router.post("/api/burger", function(req, res) {
    burger.addBurger("burger_name", [req.body.burger_name], function(result) {
      
      console.log("this is the POST result in controller:", result.changedRows)
      res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    console.log("this is the PUT req in controller:", req.params.id);
    let reqID = parseInt(req.params.id);
    burger.devourBurger("devoured", true, "id" ,reqID , function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });
});

module.exports = router;