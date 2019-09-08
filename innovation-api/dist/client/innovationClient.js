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
const teamDTO_1 = __importDefault(require("../data/teamDTO"));
const JsonConverter_1 = require("../mapper/JsonConverter");
const mongoDbClient_1 = require("../client/mongoDbClient");
class InnovationClient {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield mongoDbClient_1.getMongoConnection();
            return yield client.db(InnovationClient.dbName)
                .collection(InnovationClient.collectionName)
                .find()
                .toArray()
                .then(r => {
                var teamArray = [];
                r.forEach(element => {
                    teamArray.push(JsonConverter_1.getJsonConverter().deserializeObject(element, teamDTO_1.default));
                });
                return teamArray;
            }).catch(function (err) {
                console.log(err);
            });
            ;
        });
    }
    getTeam(teamName) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield mongoDbClient_1.getMongoConnection();
            return yield client.db(InnovationClient.dbName)
                .collection(InnovationClient.collectionName)
                .findOne({ teamName: teamName })
                .then(r => {
                return JsonConverter_1.getJsonConverter().deserializeObject(r, teamDTO_1.default);
            }).catch(function (err) {
                console.log(err);
            });
        });
    }
    createTeam(team) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = yield mongoDbClient_1.getMongoConnection();
            var innovations = team.innovations;
            client.db(InnovationClient.dbName).collection(InnovationClient.collectionName).findOneAndUpdate({ teamName: team.teamName }, { $set: { innovations } }, { upsert: true, new: true, runValidators: true }, (err, innovationsDoc) => {
                if (err)
                    throw err;
                console.log('Created or updated team with title: ' + team.teamName);
            });
        });
    }
}
InnovationClient.dbName = 'innovationboard';
InnovationClient.collectionName = 'team';
exports.default = InnovationClient;
//# sourceMappingURL=innovationClient.js.map