import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BaseStack } from "./src/Stack/BaseStack";
import { AuthStack } from "./src/Stack/AuthStack";
import { LocationPresenter } from "./src/Presenter/AppInitilization/LocationPresenter";

export interface AuthProp {
  changeStack: () => void;
}

export default function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      await LocationPresenter.instance.loadLocation();
    };
    fetchLocation();
  });

  const updateAuth = (): void => {
    setAuth(!auth);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {auth ? <BaseStack /> : <AuthStack changeStack={updateAuth} />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
