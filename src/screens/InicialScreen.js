import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function InicialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Inicial</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login", { color: "red" })}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register", { color: "red" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
