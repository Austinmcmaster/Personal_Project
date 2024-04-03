import MapView, { Region, Animated } from "react-native-maps";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";

export const Map = () => {
  const [location, setLocation] = useState<Location.LocationObject>();
  const [message, setMessage] = useState("");
  const [region, setregion] = useState<Region>();
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setMessage("Permission to access location was denied");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync();
      console.log(currentLocation);
      setLocation(currentLocation);
      const region: Region = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0173,
        longitudeDelta: 0.013,
      };
      setregion(region);
      setMapReady(true);
    };
    getPermissions();
  }, []);

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

  if (mapReady) {
    return (
      <SafeAreaView style={styles.container}>
        <Animated
          style={styles.map}
          followsUserLocation={true}
          region={region}
          onRegionChange={updateRegion}
          showsUserLocation={true}
          zoomEnabled={true}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <Text>Loading Map....</Text>
      </View>
    );
  }
};
