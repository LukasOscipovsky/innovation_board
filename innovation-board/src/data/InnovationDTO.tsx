import { JsonObject, JsonProperty } from "json2typescript";
const uuidv4 = require('uuid/v4');

@JsonObject("Innovation")
export default class InnovationDTO {

  @JsonProperty("uuid", String)
  private uuid: string | undefined = undefined

  @JsonProperty("title", String)
  private title: string | undefined = undefined;

  @JsonProperty("description", String)
  private description: string | undefined = undefined;

  @JsonProperty("status", Number)
  private status: number | undefined = undefined;

  @JsonProperty("priority", Number)
  private priority: number | undefined = undefined;

  constructor() {
    this.uuid = uuidv4();
  }

  get getUuid(): string | undefined {
    return this.uuid;
  }

  get getTitle(): string {
    return this.title === undefined ? '' : this.title;
  }

  set setTitle(title: string | undefined) {
    this.title = title;
  }

  get getDescription(): string {
    return this.description === undefined ? '' : this.description;
  }

  set setDescription(description: string | undefined) {
    this.description = description;
  }

  get getStatus(): number {
    return this.status === undefined ? 0 : this.status;
  }

  set setStatus(status: number | undefined) {
    this.status = status;
  }

  get getPriority(): number {
    return this.priority === undefined ? 0 : this.priority;
  }

  set setPriority(priority: number | undefined) {
    this.priority = priority;
  }
}