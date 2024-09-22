const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
// create a user using post "/api/auth" Does not require Auth
router.post('/'[
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "enter a valid password must be 5 character").isLength({
      min: 3,
    })
],(req,res) =>{
    console.log(req.body)
    const user = User(req.body)
    user.save()
res.json(req.body)
})
module.exports = router