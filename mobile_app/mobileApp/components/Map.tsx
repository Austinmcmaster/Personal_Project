import MapView, { Region } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { LatLng } from "react-native-maps";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

export const Map = () => {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [message, setMessage] = useState("");
  const [region, setregion] = useState<Region>();
  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setMessage("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      calDelta(
        location!.coords.latitude,
        location!.coords.longitude,
        location!.coords.accuracy!
      );
    };
    getPermissions();
  }, []);

  const calDelta = (lat: number, long: number, accuracy: number) => {
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000;
    const latDelta = accuracy / oneDegreeOfLatitudeInMeters;
    const longDelta =
      accuracy /
      (oneDegreeOfLatitudeInMeters * Math.cos(lat * (Math.PI / 180)));

    const myRegion: Region = {
      latitude: lat,
      longitude: long,
      latitudeDelta: latDelta,
      longitudeDelta: longDelta,
    };

    setregion(myRegion);
  };

  const updateRegion = (region: Region) => {
    setregion(region);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: "100%",
      height: "100%",
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        onRegionChange={updateRegion}
      />
    </SafeAreaView>
  );
};
