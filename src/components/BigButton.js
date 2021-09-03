import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function BigButton({ navigation, title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2699FA",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderRadius: 4,
    height: 50,
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});
