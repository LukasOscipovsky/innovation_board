import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Innovation")
export default class InnovationDTO {

  @JsonProperty("title", String)
  _title: String | undefined = undefined;

  @JsonProperty("description", String)
  _description: String | undefined = undefined;

  @JsonProperty("status", Number)
  _status: number | undefined = undefined;

  get title() {
    return this._title;
  }

  get description() {
    return this._description;
  }

  get status() {
    return this._status;
  }
}