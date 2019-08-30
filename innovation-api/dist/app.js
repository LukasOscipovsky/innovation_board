"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const innovationClient_1 = __importDefault(require("./client/innovationClient"));
const teamDTO_1 = __importDefault(require("./data/teamDTO"));
const innovationDTO_1 = __importDefault(require("./data/innovationDTO"));
const app = express();
const port = 8080;
const client = new innovationClient_1.default();
app.get('/team', (req, res) => {
    /// async () => {
    var team = client.getTeam('rightsplatform');
    team.then(t => {
        res.json(t);
    }).catch(function (err) {
        console.log(err);
    });
    //}
});
app.put('/team', (req, res) => {
    var innovation = new innovationDTO_1.default('java11', 'java11 on production');
    var innovation2 = new innovationDTO_1.default('java12', 'java12 on production');
    var team = new teamDTO_1.default('rightsplatform', Array.of(innovation, innovation2));
    client.createTeam(team);
    res.send('passed');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map