import axios from "axios";
import { GasRequest } from "../../../server/src/request/request";
export class ClientCommunicator {
  private SERVER_URL: string;
  constructor(SERVER_URL: string) {
    this.SERVER_URL = SERVER_URL;
  }

  async doPost<T extends GasRequest>(req: T, endpoint: string): Promise<JSON> {
    const url = this.SERVER_URL + endpoint;
    try {
      const resp = await axios.post(url, JSON.stringify(req), {
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      });
      return resp.data;
    } catch (err) {
      throw new Error(
        "Client communicator doPost failed:\n" + (err as Error).message
      );
    }
  }
}
