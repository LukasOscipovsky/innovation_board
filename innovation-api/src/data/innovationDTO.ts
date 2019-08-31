import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Innovation")
export default class InnovationDTO {

  @JsonProperty("title", String)
  title: String = undefined;

  @JsonProperty("description", String)
  description: String = undefined;
}