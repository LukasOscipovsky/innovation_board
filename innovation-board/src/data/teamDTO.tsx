import InnovationDTO from './innovationDTO'
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("Team")
export default class TeamDTO {

  @JsonProperty("teamName", String)
  _teamName: String | undefined = undefined;

  @JsonProperty("innovations", [InnovationDTO])
  _innovations: InnovationDTO[] | undefined = undefined;

  get teamName() {
    return this._teamName;
  }

  get innovations() {
    return this._innovations;
  }
}