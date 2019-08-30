"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TeamDTO {
    constructor(_teamName, _innovations) {
        this._teamName = _teamName;
        this._innovations = _innovations;
    }
    get teamName() {
        return this._teamName;
    }
    get innovations() {
        return this._innovations;
    }
}
exports.default = TeamDTO;
//# sourceMappingURL=teamDTO.js.map