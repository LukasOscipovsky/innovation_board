"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const json2typescript_1 = require("json2typescript");
const jsonConvert = new json2typescript_1.JsonConvert();
jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
jsonConvert.valueCheckingMode = json2typescript_1.ValueCheckingMode.DISALLOW_NULL;
function getJsonConverter() { return jsonConvert; }
exports.getJsonConverter = getJsonConverter;
//# sourceMappingURL=JsonConverter.js.map