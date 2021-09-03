import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Register({ route }) {
  return (
    <View style={styles.container}>
      <Text>Register: {route.params.color}</Text>
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
