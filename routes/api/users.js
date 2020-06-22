const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');


const User = require('../../models/User');

//@route POST api/users
//@desc Test route
//@acces Public
router.post(
    '/', 
    [
        check('name', 'Name is required')
        .not()
        .isEmpty(),

        check('email', 'Please include a valid email').isEmail(),

        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({min: 6}),

    ],

async(req, res) => {
    const errors = validationResult(req);      //to get data here, watch chap3 User API
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});        //400 is a bad request
    }

    const { name, email, password} = req.body;

        try{
            //chap3: user registration, See if user exists
            let user = await User.findOne({email});    //using async = use await

            if(user){
                return res
                .status(400).json({errors: [{ msg:'User already exist.' }] });
            }
            
            user = new User({
                name,
                email,
                password,
            });

            //Encrypt Password
            const salt = await bcrypt.genSalt(10); //the more gensalt, the more encrypted

            user.password = await bcrypt.hash(password,salt);

            await user.save();

            const payload = {
                user:{
                    id: user.id,
                }
            }

            jwt.sign(payload, config.get('jwtSecret'),
            { expiresIn: 360000},
            (err, token) => {
                if(err)throw err;
                res.json({token});
                }
            );
        } catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }
});

module.exports = router;