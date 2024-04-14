import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BaseStack } from "./src/Stack/BaseStack";
import { AuthStack } from "./src/Stack/AuthStack";
import { LocationPresenter } from "./src/Presenter/AppInitilization/LocationPresenter";
import UserInfoContext from "./src/Context/UserInfoContext";
import { useContextInfo } from "./src/Context/contextHook";

export interface AuthProp {
  changeStack: () => void;
}

export default function App() {
  const [auth, setAuth] = useState(false);
  const { updateLocationInfo } = useContextInfo();

  useEffect(() => {
    const fetchLocation = async () => {
      const presenter = new LocationPresenter();
      await presenter.loadLocation();
      const location = await presenter.getLocation();
      updateLocationInfo(location);
    };
    fetchLocation();
  });

  const updateAuth = (): void => {
    setAuth(!auth);
  };

  return (
    <UserInfoContext>
      <SafeAreaProvider>
        <NavigationContainer>
          {auth ? <BaseStack /> : <AuthStack changeStack={updateAuth} />}
        </NavigationContainer>
      </SafeAreaProvider>
    </UserInfoContext>
  );
}
