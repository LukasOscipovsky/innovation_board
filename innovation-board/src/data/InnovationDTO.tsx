import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Innovation")
export default class InnovationDTO {

  @JsonProperty("title", String)
  private title: string | undefined = undefined;

  @JsonProperty("description", String)
  private description: string | undefined = undefined;

  @JsonProperty("status", Number)
  private status: number | undefined = undefined;

  @JsonProperty("priority", Number)
  private priority: number | undefined = undefined;

  get getTitle(): string | undefined {
    return this.title;
  }

  set setTitle(title: string | undefined) {
    this.title = title;
  }

  get getDescription(): string | undefined {
    return this.description;
  }

  set setDescription(description: string | undefined) {
    this.description = description;
  }

  get getStatus(): number | undefined {
    return this.status;
  }

  set setStatus(status: number | undefined) {
    this.status = status;
  }

  get getPriority(): number | undefined {
    return this.priority;
  }

  set setPriority(priority: number | undefined) {
    this.priority = priority;
  }
}