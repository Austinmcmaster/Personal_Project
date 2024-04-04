import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BaseStack } from "./src/Stack/BastStack";
import { AuthStack } from "./src/Stack/AuthStack";

export default function App() {
  const [auth, setAuth] = useState(false);
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {auth ? <BaseStack /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
