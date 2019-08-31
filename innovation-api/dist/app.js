"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const innovationClient_1 = __importDefault(require("./client/innovationClient"));
const teamDTO_1 = __importDefault(require("./data/teamDTO"));
const JsonConverter_1 = require("./mapper/JsonConverter");
const app = express();
const port = 8080;
const client = new innovationClient_1.default();
app.use(express.json());
app.get('/team', (req, res) => {
    let team = client.getTeam('rightsplatform');
    team.then(t => {
        res.json(t);
    }).catch(function (err) {
        console.log(err);
    });
});
app.put('/team', (req, res) => {
    let team = JsonConverter_1.getJsonConverter().deserializeObject(req.body, teamDTO_1.default);
    client.createTeam(team);
    res.send('Team created');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map