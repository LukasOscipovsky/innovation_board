import mongo = require('mongodb')

const mongoClient = mongo.MongoClient

export default class InnovationClient {

  private static url: string = 'mongodb://localhost:27017';

  async getInnovations(teamName: string) {
    await mongoClient.connect(InnovationClient.url, (err, client) => {
      if (err) throw err;

      //client.db('innovationboard').collection('team')
      client.db('innovationboard').collection('team').find({}).toArray((err, result) => {
        if (err) throw err;
        console.log(result);
      })
    })
  }
}