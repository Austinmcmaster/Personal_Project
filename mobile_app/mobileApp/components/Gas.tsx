import React, { useState, useEffect } from "react";
import { View, Button, Text, ScrollView } from "react-native";
import { PlaceComponent, PlaceProps } from "./PlaceComponent";
import { useContextInfo } from "../src/Context/contextHook";
import { LocationPresenter } from "../src/Presenter/AppInitilization/LocationPresenter";

const Gas = () => {
  const [gasStations, setGasStations] = useState<PlaceProps[]>();
  const [fetchStatus, setFetchStatus] = useState(false);
  const { location, updateLocationInfo } = useContextInfo();

  const presenter: LocationPresenter = new LocationPresenter();
  useEffect(() => {
    (async () => {
      await presenter.loadLocation();
      const local = await presenter.getLocation();
      updateLocationInfo(local);
    })();
  }, []);

  const searchGasStations = async () => {
    if (location != undefined) {
      try {
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;

        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=gas_station&key=AIzaSyAqVmpbL25c7_sCzTY6Kf2dZxg8k4D-BTg`
        );
        const data = await response.json();
        const places: PlaceProps[] = data.results.map((result: any) => ({
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng,
          name: result.name,
          vicinity: result.vicinity,
        }));
        setGasStations(places);
        setFetchStatus(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

  if (location != undefined) {
    if (!fetchStatus) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Button title="Search Gas Stations" onPress={searchGasStations} />
        </View>
      );
    } else {
      return (
        <ScrollView style={{ padding: 10 }}>
          {gasStations?.map((station, index) => (
            <PlaceComponent
              key={index}
              name={station.name}
              vicinity={station.vicinity}
              latitude={station.latitude}
              longitude={station.longitude}
            />
          ))}
        </ScrollView>
      );
    }
  } else {
    return (
      <View>
        <Text>Loading Location</Text>
      </View>
    );
  }
};

export default Gas;
