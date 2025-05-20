// Import the MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://bhushanharode0246:26HsL8YbWjVs3NMf@cluster0.7ilff6h.mongodb.net/'; // Replace with your MongoDB connection string

// Create a new MongoClient
const client = new MongoClient(uri);

async function fetchData() {
    try {
        // Connect to the MongoDB server
        await client.connect();

        // Specify the database and collection
        const database = client.db('test_database'); // Replace with your database name
        const collection = database.collection('login_data'); // Replace with your collection name

        // Query to retrieve all documents
        const query = {};
        const documents = await collection.find(query).toArray();

        // Output the retrieved documents
        console.log(documents);
    } catch (error) {
        console.error('Error retrieving data:', error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Call the fetchData function
fetchData();
