import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Innovation")
export default class InnovationDTO {

  @JsonProperty("title", String)
  private _title: string | undefined = undefined;

  @JsonProperty("description", String)
  private _description: string | undefined = undefined;

  @JsonProperty("status", Number)
  private _status: number | undefined = undefined;

  @JsonProperty("priority", Number)
  private _priority: number | undefined = undefined;

  get title(): string | undefined {
    return this._title;
  }

  set title(title: string | undefined) {
    this._title = title;
  }

  get description() {
    return this._description;
  }

  set description(description: string | undefined) {
    this._description = description;
  }

  get status() {
    return this._status;
  }

  set status(status: number | undefined) {
    this._status = status;
  }

  get priority() {
    return this._priority;
  }

  set priority(priority: number | undefined) {
    this._priority = priority;
  }
}