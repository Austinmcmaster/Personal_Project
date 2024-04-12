export class User {
  private _firstName: string;
  private _lastName: string;
  private _userName: string;

  public constructor(firstName: string, lastName: string, userName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._userName = userName;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    this._firstName = value;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(value: string) {
    this._lastName = value;
  }

  public get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  public get userName(): string {
    return this._userName;
  }

  public set userName(value: string) {
    this._userName = value;
  }

  public equals(other: User): boolean {
    return this._userName === other._userName;
  }

  public static fromJson(json: string | null | undefined): User | null {
    if (!!json) {
      let jsonObject: {
        _firstName: string;
        _lastName: string;
        _userName: string;
      } = JSON.parse(json);
      return new User(
        jsonObject._firstName,
        jsonObject._lastName,
        jsonObject._userName
      );
    } else {
      return null;
    }
  }

  public toJson(): string {
    return JSON.stringify(this);
  }
}
