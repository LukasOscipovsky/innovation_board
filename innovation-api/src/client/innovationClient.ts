import mongo = require('mongodb')
import TeamDTO from '../data/teamDTO';
import InnovationDTO from '../data/innovationDTO';

const mongoClient = mongo.MongoClient

export default class InnovationClient {

  private static url: string = 'mongodb://localhost:27017';
  private static dbName: string = 'innovationboard';
  private static collectionName: string = 'team';


  async getTeam(teamName: string): Promise<TeamDTO> {
    let client: any = await mongoClient.connect(InnovationClient.url);
    let team: any = await client.db(InnovationClient.dbName)
      .collection(InnovationClient.collectionName)
      .findOne({ _teamName: teamName })
      .then(r => {
        return new TeamDTO(r._teamName, r.innovations);;
      }).catch(function (err) {
        console.log(err);
      });

    return team;
  }

  async createTeam(team: TeamDTO) {
    await mongoClient.connect(InnovationClient.url, (err, client) => {
      if (err) throw err;

      var innovations: Array<InnovationDTO> = team.innovations;

      client.db(InnovationClient.dbName).collection(InnovationClient.collectionName).findOneAndUpdate(
        { _teamName: team.teamName },
        { $set: { innovations } },
        { upsert: true, new: true, runValidators: true },
        (err, innovationsDoc) => {
          if (err) throw err;
          console.log('Created or updated team with title: ' + team.teamName);
        }
      )
    })
  }
}