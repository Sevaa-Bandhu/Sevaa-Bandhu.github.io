const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data', async (req, res) => {
    const client = new MongoClient(process.env.MONGO_URI);

    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection(process.env.COLLECTION_USERSLOGIN);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Failed to fetch data' });
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Backend is running at http://localhost:${port}`);
});
