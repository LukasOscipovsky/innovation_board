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
Object.defineProperty(exports, "__esModule", { value: true });
const json2typescript_1 = require("json2typescript");
let InnovationDTO = class InnovationDTO {
    constructor() {
        this.uuid = undefined;
        this.title = undefined;
        this.description = undefined;
        this.status = undefined;
        this.priority = undefined;
    }
};
__decorate([
    json2typescript_1.JsonProperty("uuid", String),
    __metadata("design:type", String)
], InnovationDTO.prototype, "uuid", void 0);
__decorate([
    json2typescript_1.JsonProperty("title", String),
    __metadata("design:type", String)
], InnovationDTO.prototype, "title", void 0);
__decorate([
    json2typescript_1.JsonProperty("description", String),
    __metadata("design:type", String)
], InnovationDTO.prototype, "description", void 0);
__decorate([
    json2typescript_1.JsonProperty("status", Number),
    __metadata("design:type", Number)
], InnovationDTO.prototype, "status", void 0);
__decorate([
    json2typescript_1.JsonProperty("priority", Number),
    __metadata("design:type", Number)
], InnovationDTO.prototype, "priority", void 0);
InnovationDTO = __decorate([
    json2typescript_1.JsonObject("Innovation")
], InnovationDTO);
exports.default = InnovationDTO;
//# sourceMappingURL=innovationDTO.js.map