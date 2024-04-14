import { Context, createContext, useState } from "react";
import { User } from "../model/user";
import * as Location from "expo-location";
interface UserInfo {
  currentUser: User | null;
  location: Location.LocationObject | undefined;
  updateUserInfo: (currentUser: User) => void;
  updateLocationInfo: (location: Location.LocationObject) => void;
}

const defaultInfo: UserInfo = {
  currentUser: null,
  location: undefined,
  updateUserInfo: (currentUser: User) => null,
  updateLocationInfo: (location: Location.LocationObject) => null,
};

export const ContextInfo: Context<UserInfo> =
  createContext<UserInfo>(defaultInfo);

interface Props {
  children: React.ReactNode;
}

interface Props {
  children: React.ReactNode;
}
const UserInfoContext: React.FC<Props> = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    ...defaultInfo,
  });
  const updateUser = (user: User) => {
    setUserInfo({ ...userInfo, currentUser: user });
  };

  const setLocation = (loc: Location.LocationObject) => {
    setUserInfo({ ...userInfo, location: loc });
  };

  return (
    <ContextInfo.Provider
      value={{
        ...userInfo,
        updateUserInfo: updateUser,
        updateLocationInfo: setLocation,
      }}
    >
      {children}
    </ContextInfo.Provider>
  );
};

export default UserInfoContext;
