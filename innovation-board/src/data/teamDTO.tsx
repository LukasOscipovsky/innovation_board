import InnovationDTO from './InnovationDTO'
import { JsonObject, JsonProperty } from "json2typescript";
const uuidv4 = require('uuid/v4');

@JsonObject("Team")
export default class TeamDTO {

  @JsonProperty("uuid", String)
  private uuid: string | undefined = undefined

  @JsonProperty("teamName", String)
  private teamName: string | undefined = undefined;

  @JsonProperty("innovations", [InnovationDTO])
  private innovations: Array<InnovationDTO> | undefined = undefined;

  constructor() {
    this.uuid = uuidv4();
  }

  get getUuid(): string | undefined {
    return this.uuid;
  }

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