import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to GasApp</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
