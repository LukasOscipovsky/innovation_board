import axios from 'axios';
import TeamDTO from '../data/teamDTO';
import jsonConverter from '../mapper/jsonConverter';

export default async function getTeams() {

  return await axios.get('http://localhost:8080/team')
    .then(r => r.data)
    .then(data => jsonConverter().deserializeArray(data, TeamDTO));
}