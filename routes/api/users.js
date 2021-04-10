const express = require('express');
const router = express.Router();

const {check, validationResult } = require('express-validator/check')

// @route GET api/users
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send("User route"));

// @route POST api/users
// @desc Register user
// @access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please use valid Email').isEmail(),
    check('password', 'Please enter a password with 6 or more char').isLength({
        min: 6
    }),
], (req, res) => {
    // console.log("body:", req.body);
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }else{
        res.send("User route")
    }
});


module.exports = router;