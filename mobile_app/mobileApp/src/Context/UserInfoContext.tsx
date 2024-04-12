import { User } from "../model/user";
import * as Location from "expo-location";
interface UserInfo {
  currentUser: User | null;
  location: Location.LocationObject | undefined;
}

const defaultInfo: UserInfo = {
  currentUser: null,
  location: undefined,
};
