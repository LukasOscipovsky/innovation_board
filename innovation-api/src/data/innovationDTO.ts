export default class InnovationDTO {
  private _title: string;
  private _description: string;

  constructor(title: string, description: string) {
    this._title = title;
    this._description = description;
  }

  public get title(): string {
    return this._title;
  }

  public get description(): string {
    return this._description;
  }
}