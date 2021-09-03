import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Favoritos() {
  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
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
