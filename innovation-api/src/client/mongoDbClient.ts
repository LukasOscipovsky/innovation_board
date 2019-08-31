import mongo = require('mongodb')

const mongoClient = mongo.MongoClient

export async function getMongoConnection() {
  let url: string = 'mongodb://localhost:27017';

  return await mongoClient.connect(url);
}