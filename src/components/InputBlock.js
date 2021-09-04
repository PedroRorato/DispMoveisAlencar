import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function InputBlock({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  text: {
    color: "#2699FA",
    fontSize: 20,
  },
});
