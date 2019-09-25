import TeamDTO from '../data/teamDTO';
import InnovationDTO from '../data/innovationDTO';
import { getJsonConverter } from '../mapper/JsonConverter'
import { getMongoConnection } from '../client/mongoDbClient';

export default class InnovationClient {

  private static dbName: string = 'innovationboard';
  private static collectionName: string = 'team';

  async getAll(): Promise<TeamDTO[]> {
    let client: any = await getMongoConnection();

    return await client.db(InnovationClient.dbName)
      .collection(InnovationClient.collectionName)
      .find()
      .toArray()
      .then(r => {
        var teamArray: TeamDTO[] = [];

        r.forEach(element => {
          teamArray.push(getJsonConverter().deserializeObject(element, TeamDTO));
        });

        return teamArray;
      }).catch(function (err) {
        console.log(err);
      });;
  }

  async getTeam(teamName: string): Promise<TeamDTO> {
    let client: any = await getMongoConnection();
    return await client.db(InnovationClient.dbName)
      .collection(InnovationClient.collectionName)
      .findOne({ teamName: teamName })
      .then(r => {
        return getJsonConverter().deserializeObject(r, TeamDTO);
      }).catch(function (err) {
        console.log(err);
      });
  }

  async createTeam(team: TeamDTO) {
    let client: any = await getMongoConnection();

    var innovations: Array<InnovationDTO> = team.innovations;

    client.db(InnovationClient.dbName).collection(InnovationClient.collectionName).findOneAndUpdate(
      { teamName: team.teamName },
      { $set: { innovations } },
      { upsert: true, new: true, runValidators: true },
      (err, innovationsDoc) => {
        if (err) throw err;
        console.log('Created or updated team with title: ' + team.teamName);
      }
    )
  }

  async deleteTeam(_teamName: string) {
    let client: any = await getMongoConnection();

    client.db(InnovationClient.dbName).collection(InnovationClient.collectionName).deleteOne(
      { teamName: _teamName },
      (err, innovationsDoc) => {
        if (err) throw err;
        console.log('Deletedteam with title: ' + _teamName);
      }
    )
  }
}