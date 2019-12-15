var express = require('express');
var router = express.Router()
var sequelize = require("../db");
var TestModel = sequelize.import("../models/test"); 


router.post('/log', function(req,res){

var description = req.body.user.description;
var definition = req.body.user.definition;
var result = req.body.user.result;
var owner = req.body.user.owner;

Log.create({
    description: description,
    definition: definition,
    result: result,
    owner: owner,
}).then(
    function createSuccess(log) {
      res.json({
        user: user,
        message: "created",
        sessionToken: token
      });
    },
    function createError(err) {
      res.send(500, err.message);
    }
  );
});


module.exports = router