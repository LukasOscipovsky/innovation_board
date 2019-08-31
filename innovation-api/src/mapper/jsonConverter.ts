import { ValueCheckingMode, OperationMode, JsonConvert } from "json2typescript";

export function getJsonConverter() {
  let jsonConvert: JsonConvert = new JsonConvert();
  jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
  jsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
  jsonConvert.valueCheckingMode = ValueCheckingMode.DISALLOW_NULL; // never allow null

  return jsonConvert;
}