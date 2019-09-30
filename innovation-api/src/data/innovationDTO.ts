import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Innovation")
export default class InnovationDTO {

  @JsonProperty("uuid", String)
  uuid: string = undefined

  @JsonProperty("title", String)
  title: String = undefined;

  @JsonProperty("description", String)
  description: String = undefined;

  @JsonProperty("status", Number)
  status: number = undefined;

  @JsonProperty("priority", Number)
  priority: number = undefined;
}