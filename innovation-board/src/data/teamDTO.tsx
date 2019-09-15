import InnovationDTO from './innovationDTO'
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Team")
export default class TeamDTO {

  @JsonProperty("teamName", String)
  private teamName: String | undefined = undefined;

  @JsonProperty("innovations", [InnovationDTO])
  private innovations: Array<InnovationDTO> | undefined = undefined;

  get getTeamName() {
    return this.teamName;
  }

  get getInnovations() {
    return this.innovations;
  }
}