import { login } from "../request/request";

export const handler = async (event: any) => {
  const loginObj: login = JSON.parse(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
