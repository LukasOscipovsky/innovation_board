import mongo = require('mongodb')
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./src/app.file');

const url: string = properties.get('mongo.client');
const mongoClient = mongo.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

export async function getMongoConnection() { return await mongoClient; } 4