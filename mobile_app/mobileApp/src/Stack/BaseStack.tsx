import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../components/HomeScreen";
import { Map } from "../../components/Map";
import Gas from "../../components/Gas";
import Navbar from "../../components/navbar";

export type BaseStackType = {
  Home: any;
  Map: any;
  Gas: any;
};
const RootStack = createStackNavigator<BaseStackType>();

export const BaseStack = () => {
  return (
    <>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerStyle: { backgroundColor: "#FF5733" } }}
      >
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Map" component={Map} />
        <RootStack.Screen name="Gas" component={Gas} />
      </RootStack.Navigator>
      <Navbar />
    </>
  );
};
