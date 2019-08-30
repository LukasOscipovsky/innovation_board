import InnovationDTO from './innovationDTO'

export default class TeamDTO {
  private _teamName: string;
  private _innovations: Array<InnovationDTO>;

  constructor(_teamName: string, _innovations: Array<InnovationDTO>) {
    this._teamName = _teamName;
    this._innovations = _innovations;
  }

  public get teamName(): string {
    return this._teamName;
  }

  public get innovations(): Array<InnovationDTO> {
    return this._innovations;
  }
}