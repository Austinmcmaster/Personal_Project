import React from "react";
import { View, Text, StyleSheet } from "react-native";

export interface PlaceProps {
  name: string;
  vicinity: string;
  latitude: number;
  longitude: number;
}

export const PlaceComponent: React.FC<PlaceProps> = ({
  name,
  vicinity,
  latitude,
  longitude,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.vicinity}>{vicinity}</Text>
      <Text style={styles.coordinates}>
        Latitude: {latitude}, Longitude: {longitude}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  vicinity: {
    fontSize: 14,
    marginBottom: 5,
  },
  coordinates: {
    fontSize: 12,
    color: "#666",
  },
});
