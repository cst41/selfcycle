const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const MongoClient = require('mongodb').MongoClient;
const config = require('config');

//@route    GET api/points
//@desc     Retrieve points data from database
//@acces    Private (testing purpose set to public)
router.get('/', async (req,res) => {
    const client = new MongoClient(config.get("mongoURI"), {useUnifiedTopology: true});

    try {
        await client.connect();
        const db = client.db("test");
        const col = db.collection("smartbin");
        let r = await col.find({"userID": "5ee5b4f59ca7b32c0417349c"}).toArray();
        r = r[0]; // Strip Array

        client.close();
        if(r == undefined) {
            res.json({"data":""});
        } else {
            res.json(r.data);
        }
    }catch(err) {
        console.error(err.message);
        res.status(500).json({"msg": "Server Error"});
    }

    client.close();
});

module.exports = router;