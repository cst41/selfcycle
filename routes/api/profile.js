const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

//@route    GET api/profile/me
//@desc     Test route
//@acces    Private
router.get('/me', auth, async (req, res) => {

    try{

        const profile = await Profile.findOne({ user: req.user.id }).populate('user', 
        ['name']);

        if(!profile){
            return res.status(400).json({ msg: 'There is no profile for this user'});
        }

        res.json(profile);
    }   catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route    GET api/profile/me
//@desc     Create or update a user profile
//@acces    Private
router.post('/', 
    [ auth, 
    
        [
            check('dob', 'Date of Birth is required')
                .not()
                .isEmpty(),

            check('phonenum', 'Phone Number is required')
                .not()
                .isEmpty(),
            
            check('houseadd', 'House Address is required')
                .not()
                .isEmpty(),

        ]

    ], 
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});
        }

        const{
            dob,
            phonenum,
            houseadd,
            //status,
            //skills,
        } = req.body;

        //Build profile object
        const profileFields = {};
        profileFields.user = req.user.id;
        if(dob) profileFields.dob = dob;
        if(phonenum) profileFields.phonenum = phonenum;
        if(houseadd) profileFields.houseadd = houseadd;
        /*if(status) profileFields.status = status;
        if(skills){
            profileFields.skills = skills.split(',').map(skill => skill.trim());
        }*/

        try{
            let profile = await Profile.findOne({ user: req.user.id });

            if(profile){
                //Update
                profile = await Profile.findOneAndUpdate(
                        { user: req.user.id }, 
                        { $set: profileFields }, 
                        { new: true }
                    );

                    return res.json(profile);
            }

            //Create
            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);

        }   catch(err){
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);  

//@route 	GET api/profile
//@desc		GET all profiles
//@access 	Public

router.get('/', async (req,res) => {
	try{
		const profiles = await Profile.find().populate('user',
		['name']);
		res.json(profiles);
	
	}	catch(err){
        console.error(err.message);
    
		res.status(500).send('Server Error');
	}
	
});

//@route 	GET api/profile/user/:user_id
//@desc		GET all profile by user ID
//@access 	Public

router.get('/user/:user_id', async (req,res) => {
	try{
		const profile = await Profile.findOne({ user: req.params.user_id }).populate('user',
		['name']);
		
		if(!profile) return res.status(400).json({ msg: 'Profile not found' });
		
		res.json(profile);
	
	}	catch(err){
        console.error(err.message);
        
        if(err.kind == 'ObjectId'){
            return res.status(400).json({ msg: 'Profile not found' });
		
        }
		res.status(500).send('Server Error');
	}
	
});

//@route 	Delete api/profile/user/:user_id
//@desc		Delete profile, user & posts
//@access 	Public
router.delete('/', auth, async (req,res) => {
	try{
        //Remove user posts
        await Post.deleteMany({ user: req.user.id });
        //Remove profile
		await Profile.findOneAndRemove({ user: req.user.id });
		//Remove user
		await User.findOneAndRemove({ _id: req.user.id });
		
		res.json({ msg: 'User removed' });
	
	}	catch(err){
        console.error(err.message);
		res.status(500).send('Server Error');
	}
	
});

/*/@route 	PUT api/profile/experience
//@desc		Add profile experience
//@access 	Public
router.put('/experience', 
    [
        auth,
        [
            check('title', 'Title is required')
                .not()
                .isEmpty(),
            check('company', 'Company is required')
                .not()
                .isEmpty(),
            check('from', 'From date is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});

        }

        const{
            title,
            company,
            location,
            from,
            to,
            current,
            description
        } = req.body;

        const newExp = {
            title,
            company,
            location,
            from,
            to,
            current,
            description
        }

        try{
            const profile = await Profile.findOne({  user: req.user.id  });
            
            profile.experience.unshift(newExp);

            await profile.save();
            res.json(profile);
        }   catch(err){
            console.error(err.message);
            res.status(500).send('Send Error');
        }
    }

);

//@route 	DELETE api/profile/experience
//@desc		DELETE experience from profile
//@access 	Private
router.delete('/experience/:exp_id', auth, async (req, res) => {

    try{
        const profile = await Profile.findOne({  user: req.user.id  });

        //Get remove index
        const removeIndex = profile.experience
            .map(item => item.id)
            .indexOf(req.params.exp_id);

        profile.experience.splice(removeIndex, 1);
        
        await profile.save();

        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//@route 	PUT api/profile/education
//@desc		Add profile education
//@access 	Public
router.put('/education', 
    [
        auth,
        [
            check('school', 'School is required')
                .not()
                .isEmpty(),
            check('degree', 'Degree is required')
                .not()
                .isEmpty(),
            check('fieldofstudy', 'Field of Study is required')
                .not()
                .isEmpty(),
            check('from', 'From date is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req,res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array()});

        }

        const{
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
        } = req.body;

        const newEdu = {
            school,
            degree,
            fieldofstudy,
            from,
            to,
            current,
            description
        }

        try{
            const profile = await Profile.findOne({  user: req.user.id  });
            
            profile.education.unshift(newEdu);

            await profile.save();
            res.json(profile);
        }   catch(err){
            console.error(err.message);
            res.status(500).send('Send Error');
        }
    }

);

//@route 	DELETE api/profile/education
//@desc		DELETE education from profile
//@access 	Private
router.delete('/education/:exp_id', auth, async (req, res) => {

    try{
        const profile = await Profile.findOne({  user: req.user.id  });

        //Get remove index
        const removeIndex = profile.education.map(item => item.id).indexOf(req.params.exp_id);

        profile.education.splice(removeIndex, 1);
        
        await profile.save();

        res.json(profile);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});*/

module.exports = router;