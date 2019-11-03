"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const innovationClient_1 = __importDefault(require("./client/innovationClient"));
const teamDTO_1 = __importDefault(require("./data/teamDTO"));
const jsonConverter_1 = require("./mapper/jsonConverter");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./src/app.file');
const app = express();
const port = properties.get('app.port');
const client = new innovationClient_1.default();
app.use(express.json());
app.use(cors());
app.get('/team/:teamName', (req, res) => {
    let team = client.getTeam(req.params.teamName);
    console.log('Received request to get team with name: ' + req.params.teamName);
    team.then(t => {
        res.json(t);
    }).catch(function (err) {
        console.log(err);
    });
}).get('/team', (req, res) => {
    let teams = client.getAll();
    console.log('Received request to get teams');
    teams.then(t => {
        res.json(t);
    }).catch(function (err) {
        console.log(err);
    });
}).put('/team', (req, res) => {
    let team = jsonConverter_1.getJsonConverter().deserializeObject(req.body, teamDTO_1.default);
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
//# sourceMappingURL=app.js.map