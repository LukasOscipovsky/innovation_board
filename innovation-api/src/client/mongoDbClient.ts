import mongo = require('mongodb')

const url: string = 'mongodb://localhost:27017';
const mongoClient = mongo.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

export async function getMongoConnection() { return await mongoClient; }