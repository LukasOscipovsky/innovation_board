import axios from 'axios';
import TeamDTO from '../data/teamDTO';
import jsonConverter from '../mapper/jsonConverter';


export const getTeams = async () => {
  return await axios.get('http://10.219.227.17:5555/team')
    .then(r => r.data)
    .then(data => jsonConverter().deserializeArray(data, TeamDTO));
}

export const saveTeam = async (team: TeamDTO) => {
  return await axios.put('http://10.219.227.17:5555/team', team)
    .then(r => r, err => { console.log(err) })
}

export const deleteTeam = async (teamName: string) => {
  return await axios.delete('http://10.219.227.17:5555/team/' + teamName)
    .then(r => r, err => { console.log(err) })
}