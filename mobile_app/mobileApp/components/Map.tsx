import MapView, { Region, Animated } from "react-native-maps";
import { useContext, useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { LocationPresenter } from "../src/Presenter/AppInitilization/LocationPresenter";
import { useContextInfo } from "../src/Context/contextHook";

export const Map = () => {
  const [region, setregion] = useState<Region>();
  const [mapReady, setMapReady] = useState(false);
  const { location, updateLocationInfo } = useContextInfo();

  useEffect(() => {
    readyMap();
  }, [location]);

  const readyMap = async () => {
    let currentLocation = location;
    if (currentLocation == undefined) {
      currentLocation = await new LocationPresenter().getLocation();
    }
    updateLocationInfo(currentLocation);
    const region: Region = {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.0173,
      longitudeDelta: 0.013,
    };
    setregion(region);
    setMapReady(true);
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

  if (mapReady) {
    return (
      <SafeAreaView style={styles.container}>
        <Animated
          style={styles.map}
          //followsUserLocation={true}
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
