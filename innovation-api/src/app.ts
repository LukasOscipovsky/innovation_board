import express = require('express');
import cors = require('cors');
import InnovationClient from './client/innovationClient'
import TeamDTO from './data/teamDTO';
import { getJsonConverter } from './mapper/jsonConverter';
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./src/app.file');

const app = express();
const port = properties.get('app.port');

const client = new InnovationClient();

app.use(express.json());
app.use(cors())

app.get('/team/:teamName', (req, res) => {
  let team: Promise<TeamDTO> = client.getTeam(req.params.teamName);

  console.log('Received request to get team with name: ' + req.params.teamName);

  team.then(t => {
    res.json(t)
  }).catch(function (err) {
    console.log(err);
  });
}).get('/team', (req, res) => {
  let teams: Promise<TeamDTO[]> = client.getAll();

  console.log('Received request to get teams');

  teams.then(t => {
    res.json(t)
  }).catch(function (err) {
    console.log(err);
  });
}).put('/team', (req, res) => {
  let team: TeamDTO = getJsonConverter().deserializeObject(req.body, TeamDTO);

  console.log('Received request to create or update team');

  client.createTeam(team);
  res.send('Team created/updated');
}).delete('/team/:teamName', (req, res) => {

  console.log('Received request to delete team');

  client.deleteTeam(req.params.teamName);
  res.send('Deleted team');
}).listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});