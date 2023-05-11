var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


/* GET users listing. */
router.post('/login', function(req, res, next) {
  const body = req.body;
  if (body.username=="admin" && body.password == "Pass@123") {
    const token = jwt.sign({role: "admin"}, "secret")

    res.send({token: token})
  } 
  else if (body.username=="guest" && body.password == "Pass@123"){
    const token = jwt.sign({role: "guest"}, "secret")

    res.send({token: token})
  }
  else {
   
  res.status(429).send({message: "Unauthorized access"})
  }
});

module.exports = router;

