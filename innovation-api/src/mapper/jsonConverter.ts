import { ValueCheckingMode, OperationMode, JsonConvert } from "json2typescript";
import { json } from "body-parser";

const jsonConvert: JsonConvert = new JsonConvert();

jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;


export function getJsonConverter() { return jsonConvert } 
