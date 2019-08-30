import express = require('express');
import InnovationClient from './client/innovationClient'
import TeamDTO from './data/teamDTO';
import InnovationDTO from './data/innovationDTO';

const app = express();
const port = 8080;

const client = new InnovationClient();

app.get('/team', (req, res) => {
  var team: Promise<TeamDTO> = client.getTeam('rightsplatform');
  team.then(t => {
    res.json(t)
  }).catch(function (err) {
    console.log(err);
  });
})

app.put('/team', (req, res) => {
  var innovation: InnovationDTO = new InnovationDTO('java11', 'java11 on production');
  var innovation2: InnovationDTO = new InnovationDTO('java12', 'java12 on production')

  var team: TeamDTO = new TeamDTO('rightsplatform', Array.of(innovation, innovation2))

  client.createTeam(team);
  res.send('passed');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});