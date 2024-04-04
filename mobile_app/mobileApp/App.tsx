import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BaseStack } from "./src/Stack/BastStack";
import { AuthStack } from "./src/Stack/AuthStack";

export interface AuthProp {
  changeStack: () => void;
}

export default function App() {
  const [auth, setAuth] = useState(false);

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
