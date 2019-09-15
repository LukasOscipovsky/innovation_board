import axios from 'axios';
import TeamDTO from '../data/teamDTO';
import jsonConverter from '../mapper/jsonConverter';


export const getTeams = async () => {
  return await axios.get('http://localhost:8080/team')
    .then(r => r.data)
    .then(data => jsonConverter().deserializeArray(data, TeamDTO));
}

export const saveTeam = async (team: TeamDTO) => {
  return await axios.put('http://localhost:8080/team', team)
    .then(r => console.log(r), err => { console.log(err) })
}