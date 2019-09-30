import mongo = require('mongodb')

const url: string = 'mongodb://172.18.0.1:2222';
const mongoClient = mongo.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

export async function getMongoConnection() { return await mongoClient; }