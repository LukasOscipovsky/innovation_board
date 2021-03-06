import axios from 'axios';
import TeamDTO from '../data/teamDTO';
import jsonConverter from '../mapper/jsonConverter';
import { properties } from '../properties';

const apiIp: string = properties.apiUrl;

export const getTeams = async () => {
  return await axios.get('http://' + apiIp + '/team')
    .then(r => r.data)
    .then(data => jsonConverter().deserializeArray(data, TeamDTO));
}

export const saveTeam = async (team: TeamDTO) => {
  return await axios.put('http://' + apiIp + '/team', team)
    .then(r => r, err => { console.log(err) })
}

export const deleteTeam = async (uuid: string | undefined) => {
  return await axios.delete('http://' + apiIp + '/team/' + uuid)
    .then(r => r, err => { console.log(err) })
}