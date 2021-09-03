import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BigButton from "../components/BigButton";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <BigButton title="LOGIN" onPress={() => navigation.navigate("Login")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
