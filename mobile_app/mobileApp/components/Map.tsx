import { View } from "react-native";
import MapView from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const Map = () => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestBackgroundPermissionsAsync();
      console.log(status);
      if (status === "granted") {
        let currentLocation = await Location.getCurrentPositionAsync({});
        console.log(currentLocation);
      }
      console.log("Please grant access to location");
      return;
    };
    getPermissions();
  }, []);
  return <View></View>;
};
