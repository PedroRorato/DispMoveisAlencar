import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Agenda() {
  return (
    <View style={styles.container}>
      <Text>Agenda</Text>
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
