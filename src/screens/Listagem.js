import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Listagem() {
  return (
    <View style={styles.container}>
      <Text>Listagem</Text>
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
