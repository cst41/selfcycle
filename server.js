const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const config = require('config');
const MongoClient = require('mongodb').MongoClient;

const app = express();

//Connect database
connectDB();
const url = config.get("mongoURI");
const dbname = "test";

//Init Middleware
app.use(express.json({ extended: false}));

//Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/points', require('./routes/api/points'));

// Upload function which sends data from arduino to database
const upload = async (jsn) => {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        console.log("Connected to database");

        const db = client.db(dbname);

        const col = db.collection('smartbin');
        let r = await col.find({"userID": "5ee5b4f59ca7b32c0417349c"}).toArray();
        r = r[0]; // Strip array

        if(r == undefined) {
            await col.insertOne(jsn); // Create new record
        } else {
            await col.update({"userID":"5ee5b4f59ca7b32c0417349c"}, jsn); // Find user and deletes
        }
    }catch(err) {
        console.log(err);
    }

    client.close();
};

// Download function which retrieves data to be send to arduino from the database
const download = async () => {
    const client = new MongoClient(url, { useUnifiedTopology: true });

    try {
        await client.connect();
        
        const db = client.db(dbname);

        const col = db.collection("wastetype");
        
        let r = null;
        r = await col.find({"userID": "5ee5b4f59ca7b32c0417349c"}).project({"_id":0, "type":1}).toArray(); // Retrieve data from database
        r = r[0]; // Strip array

        let r2;
        if(r != undefined) {
            const col2 = db.collection("smartbin");
            r2 = await col2.aggregate([{"$unwind": "$data"}, {"$match": {"userID":  "5ee5b4f59ca7b32c0417349c", "data.binType": r.type}}, {"$project": {"_id": 0,    "data": 1}}]).toArray(); // Retrieve data from database
            r2 = r2[0]; // Strip array
        }

        client.close();
        return r2;
    } catch(err) {
        console.log(err);
    }

    client.close();
};

// Handles arduino request and sends data from database to arduino
app.get("/api/getData", async (req,res) => {
    let r = await download();
    if(r != undefined) {
        res.json(r);
        remove();
    } else {
        res.send("Get Request");
    }
});

// Handles arduino request and sends data from arduino to database
app.post("/api/sendData", async (req,res) => {
    upload(req.body);
    res.send("Post Request");
});

//Serve static assets in production
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));