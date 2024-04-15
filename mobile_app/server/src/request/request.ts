export class GasRequest {}

export interface login {
  username: string;
  lastname: string;
}

export class LoginRequest extends GasRequest {
  username: string;
  password: string;

  public constructor(username: string, password: string) {
    super();
    this.username = username;
    this.password = password;
  }
}
