const mongodb = request('mongodb');
const connectionString = 'mongodb://localhost:27017'; 
const connection = new mongodb.MongoClient(connectionString, {
    useUnifiedTopology: true;
});
connection.connect();