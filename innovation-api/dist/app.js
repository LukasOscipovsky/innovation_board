"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const innovationClient_1 = __importDefault(require("./client/innovationClient"));
const teamDTO_1 = __importDefault(require("./data/teamDTO"));
const jsonConverter_1 = require("./mapper/jsonConverter");
const app = express();
const port = 8080;
const client = new innovationClient_1.default();
app.use(express.json());
app.get('/team/:teamName', (req, res) => {
    let team = client.getTeam(req.params.teamName);
    team.then(t => {
        res.json(t);
    }).catch(function (err) {
        console.log(err);
    });
}).get('/team', (req, res) => {
    let teams = client.getAll();
    teams.then(t => {
        res.json(t);
    }).catch(function (err) {
        console.log(err);
    });
}).put('/team', (req, res) => {
    let team = jsonConverter_1.getJsonConverter().deserializeObject(req.body, teamDTO_1.default);
    client.createTeam(team);
    res.send('Team created');
}).listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map