import InnovationDTO from './innovationDTO'
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Team")
export default class TeamDTO {

  @JsonProperty("teamName", String)
  private teamName: string | undefined = undefined;

  @JsonProperty("innovations", [InnovationDTO])
  private innovations: Array<InnovationDTO> | undefined = undefined;

  set setTeamName(teamName: string | undefined) {
    this.teamName = teamName;
  }

  get getTeamName() {
    return this.teamName === undefined ? '' : this.teamName;
  }

  set setInnovations(innovations: Array<InnovationDTO> | undefined) {
    this.innovations = innovations;
  }

  get getInnovations(): Array<InnovationDTO> {
    return this.innovations === undefined ? [] : this.innovations;
  }
}