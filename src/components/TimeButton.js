import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TimeButton({ horario, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{horario}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2699FA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    height: 50,
    width: 75,
    marginLeft: 12,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
  },
});
