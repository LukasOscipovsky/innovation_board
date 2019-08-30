"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require("mongodb");
const teamDTO_1 = __importDefault(require("../data/teamDTO"));
const mongoClient = mongo.MongoClient;
class InnovationClient {
    getTeam(teamName) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield mongoClient.connect(InnovationClient.url);
            let team = yield client.db(InnovationClient.dbName)
                .collection(InnovationClient.collectionName)
                .findOne({ _teamName: teamName })
                .then(r => {
                return new teamDTO_1.default(r._teamName, r.innovations);
                ;
            }).catch(function (err) {
                console.log(err);
            });
            console.log(team);
            return team;
        });
    }
    createTeam(team) {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoClient.connect(InnovationClient.url, (err, client) => {
                if (err)
                    throw err;
                var innovations = team.innovations;
                client.db(InnovationClient.dbName).collection(InnovationClient.collectionName).findOneAndUpdate({ _teamName: team.teamName }, { $set: { innovations } }, { upsert: true, new: true, runValidators: true }, (err, innovationsDoc) => {
                    if (err)
                        throw err;
                    console.log('Created or updated team with title: ' + team.teamName);
                });
            });
        });
    }
}
InnovationClient.url = 'mongodb://localhost:27017';
InnovationClient.dbName = 'innovationboard';
InnovationClient.collectionName = 'team';
exports.default = InnovationClient;
//# sourceMappingURL=innovationClient.js.map