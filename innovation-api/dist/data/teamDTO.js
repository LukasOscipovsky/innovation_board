"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const innovationDTO_1 = __importDefault(require("./innovationDTO"));
const json2typescript_1 = require("json2typescript");
let TeamDTO = class TeamDTO {
    constructor() {
        this.uuid = undefined;
        this.teamName = undefined;
        this.innovations = undefined;
    }
};
__decorate([
    json2typescript_1.JsonProperty("uuid", String),
    __metadata("design:type", String)
], TeamDTO.prototype, "uuid", void 0);
__decorate([
    json2typescript_1.JsonProperty("teamName", String),
    __metadata("design:type", String)
], TeamDTO.prototype, "teamName", void 0);
__decorate([
    json2typescript_1.JsonProperty("innovations", [innovationDTO_1.default]),
    __metadata("design:type", Array)
], TeamDTO.prototype, "innovations", void 0);
TeamDTO = __decorate([
    json2typescript_1.JsonObject("Team")
], TeamDTO);
exports.default = TeamDTO;
//# sourceMappingURL=teamDTO.js.map