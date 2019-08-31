import express = require('express');
import InnovationClient from './client/innovationClient'
import TeamDTO from './data/teamDTO';
import InnovationDTO from './data/innovationDTO';
import { ValueCheckingMode, OperationMode, JsonConvert } from "json2typescript";
import { getJsonConverter } from './mapper/JsonConverter';

const app = express();
const port = 8080;

const client = new InnovationClient();

app.use(express.json());

app.get('/team', (req, res) => {
  let team: Promise<TeamDTO> = client.getTeam('rightsplatform');

  team.then(t => {
    res.json(t)
  }).catch(function (err) {
    console.log(err);
  });
})

app.put('/team', (req, res) => {
  let team: TeamDTO = getJsonConverter().deserializeObject(req.body, TeamDTO);

  client.createTeam(team);
  res.send('Team created');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});