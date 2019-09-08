import { ValueCheckingMode, JsonConvert } from "json2typescript";

const jsonConvert: JsonConvert = new JsonConvert();

jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL;

export default function getJsonConverter() { return jsonConvert } 
