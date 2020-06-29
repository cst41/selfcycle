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
        const col = db.collection("posts");
        let r = await col.findOne({issues}).toArray();

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