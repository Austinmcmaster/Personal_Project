import { ClientCommunicator } from "../net/ClientCommunicator";

export class AuthenticationService {
  private SERVER_URL = "";
  private clientCommunicator = new ClientCommunicator(this.SERVER_URL);
  public async register(
    username: string,
    firstname: string,
    lastname: string,
    password: string
  ): Promise<void> {}

  public async login(username: string, password: string) {}
}
