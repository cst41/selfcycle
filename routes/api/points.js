const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const MongoClient = require('mongodb').MongoClient;
const config = require('config');
const { ObjectId } = require('mongodb');

//@route    GET api/points
//@desc     Retrieve points data from database
//@acces    Private (testing purpose set to public)
router.get('/', auth, async (req,res) => {
    const client = new MongoClient(config.get("mongoURI"), {useUnifiedTopology: true});

    try {
        await client.connect();
        const db = client.db("test");
        let col = db.collection("smartbin");
        let r = await col.find({"userID": "5ee5b4f59ca7b32c0417349c"}).toArray();
        r = r[0]; // Strip Array

        col = db.collection("users");
        let r2 = await col.find({"_id": ObjectId("5ee5b4f59ca7b32c0417349c")}).project({"_id": 0, "points": 1}).toArray();
        r2 = r2[0]; // Strip Array

        client.close();
        if(r == undefined) {
            res.json({"data":""});
        } else {
            let result = {};
            result.data = r.data;
            result.points = r2.points;
            res.json(result);
        }
    }catch(err) {
        console.error(err.message);
        res.status(500).json({"msg": "Server Error"});
    }

    client.close();
});

//@route    POST api/points
//@desc     Send total points data from client to database
//@acces    Private (testing purpose set to public)
router.post("/", auth, async (req, res) => {
    const client = new MongoClient(config.get("mongoURI"), {useUnifiedTopology: true});

    try {
        await client.connect();
        const db = client.db("test");
        let col = db.collection("users");
        await col.update({"_id": ObjectId("5ee5b4f59ca7b32c0417349c")}, {"$set": {"points": req.body.total}});
        client.close();
    } catch (err) {
        console.error(err.message);
        res.status(500).json({"msg": "Server Error"});
    }
});

module.exports = router;