import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import * as Progress from "react-native-progress";
import Navbar from "./components/navbar";
import { HomeScreen } from "./components/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Map } from "./components/Map";
import Gas from "./components/Gas";

export type RootStackParams = {
  Home: any;
  Map: any;
  Gas: any;
};
const Appstack = createStackNavigator<RootStackParams>();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Appstack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerStyle: { backgroundColor: "#FF5733" } }}
        >
          <Appstack.Screen name="Home" component={HomeScreen} />
          <Appstack.Screen name="Map" component={Map} />
          <Appstack.Screen name="Gas" component={Gas} />
        </Appstack.Navigator>
        <Navbar />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
