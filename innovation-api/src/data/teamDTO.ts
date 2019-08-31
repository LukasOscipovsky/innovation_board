import InnovationDTO from './innovationDTO'
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Team")
export default class TeamDTO {

  @JsonProperty("teamName", String)
  teamName: String = undefined;

  @JsonProperty("innovations", [InnovationDTO])
  innovations: InnovationDTO[] = undefined;
}