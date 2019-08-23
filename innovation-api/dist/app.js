"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const innovationClient_1 = __importDefault(require("./client/innovationClient"));
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    new innovationClient_1.default().getInnovations('rightsplatform');
    res.send('passed');
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map