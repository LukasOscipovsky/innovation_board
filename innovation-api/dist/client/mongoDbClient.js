"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo = require("mongodb");
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./src/app.file');
const url = properties.get('mongo.client');
const mongoClient = mongo.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
function getMongoConnection() {
    return __awaiter(this, void 0, void 0, function* () { return yield mongoClient; });
}
exports.getMongoConnection = getMongoConnection;
4;
//# sourceMappingURL=mongoDbClient.js.map