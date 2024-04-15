import {
  DynamoDBDocumentClient,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export class UserDynamoDao {
  readonly tableName = "UserGas";
  readonly firstNameAtr = "first_Name";
  readonly lastNameAtr = "last_Name";
  readonly usernameAtr = "username";
  readonly passwordAtr = "password";

  private readonly client = DynamoDBDocumentClient.from(new DynamoDBClient());
  async getUser(alias: string): Promise<UserEntity | undefined> {
    return await this.getUserTable(alias);
  }
  async putUser(userEntity: UserEntity): Promise<void> {
    await this.putUserTable(userEntity);
  }

  private async putUserTable(user: UserEntity): Promise<void> {
    const params = {
      TableName: this.tableName,
      Item: {
        [this.firstNameAtr]: user._firstName,
        [this.lastNameAtr]: user._lastName,
        [this.usernameAtr]: user._username,
        [this.passwordAtr]: user._password,
      },
    };

    await this.client.send(new PutCommand(params));
  }

  private async getUserTable(alias: string): Promise<UserEntity | undefined> {
    const params = {
      TableName: this.tableName,
      Key: this.generateUserItem(alias),
    };

    const output = await this.client.send(new GetCommand(params));
    return output.Item == undefined
      ? undefined
      : new UserEntity(
          output.Item[this.usernameAtr],
          output.Item[this.passwordAtr],
          output.Item[this.firstNameAtr],
          output.Item[this.lastNameAtr]
        );
  }

  private generateUserItem(username: string) {
    return {
      [this.usernameAtr]: username,
    };
  }
}

export class UserEntity {
  public _username: string;
  public _password: string;
  public _firstName: string;
  public _lastName: string;

  public constructor(
    username: string,
    password: string,
    first_Name: string,
    last_Name: string
  ) {
    this._username = username;
    this._password = password;
    this._firstName = first_Name;
    this._lastName = last_Name;
  }
}
