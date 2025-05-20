const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors({origin: 'https://sevaa-bandhu.github.io'}));

app.get('/api/login_data', async (req, res) => {
    const client = new MongoClient('mongodb+srv://bhushanharode0246:26HsL8YbWjVs3NMf@cluster0.7ilff6h.mongodb.net/');

    try {
        await client.connect();
        const db = client.db('test_database');
        const collection = db.collection('login_data');
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
