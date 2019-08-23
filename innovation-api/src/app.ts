import express = require('express');
import InnovationClient from './client/innovationClient'

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  new InnovationClient().getInnovations('rightsplatform');
  res.send('passed');
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});