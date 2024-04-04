import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { AuthStackType } from "../../Stack/AuthStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { AuthProp } from "../../../App";

export const LoginComponent = (props: AuthProp) => {
  const [Username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigation = useNavigation<NativeStackNavigationProp<AuthStackType>>();

  const handleLogin = () => {
    if (!password || !Username) {
      alert("Please fill in all fields");
      return;
    }
    props.changeStack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={Username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.signInText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  signInText: {
    marginTop: 20,
    color: "blue",
  },
});
