import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

export default function Input({ title, ...rest }) {
  return (
    <>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.input} {...rest} />
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "#555",
    fontSize: 20,
    marginBottom: 5,
    width: "100%",
  },
  input: {
    borderColor: "#aaa",
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },
});
