"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json2typescript_1 = require("json2typescript");
function getJsonConverter() {
    let jsonConvert = new json2typescript_1.JsonConvert();
    jsonConvert.operationMode = json2typescript_1.OperationMode.LOGGING; // print some debug data
    jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.DISALLOW_NULL; // never allow null
    return jsonConvert;
}
exports.getJsonConverter = getJsonConverter;
//# sourceMappingURL=JsonConverter.js.map