import axios from 'axios';
import TeamDTO from '../data/teamDTO';
import jsonConverter from '../mapper/jsonConverter';

const apiIp: string = '10.219.227.17:5555';

export const getTeams = async () => {
  return await axios.get('http://' + apiIp + '/team')
    .then(r => r.data)
    .then(data => jsonConverter().deserializeArray(data, TeamDTO));
}

export const saveTeam = async (team: TeamDTO) => {
  return await axios.put('http://' + apiIp + '/team', team)
    .then(r => r, err => { console.log(err) })
}

export const deleteTeam = async (teamName: string) => {
  return await axios.delete('http://' + apiIp + '/team/' + teamName)
    .then(r => r, err => { console.log(err) })
}