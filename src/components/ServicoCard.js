import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ServicoCard({ id, data, servico, empresa }) {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>{data}</Text>
      <Text style={styles.servico}>{servico}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    paddingVertical: 20,
    width: "100%",
  },
  data: {
    color: "#2699FA",
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 8,
    textAlign: "center",
  },
  servico: {
    color: "#555",
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center",
  },
  empresa: {
    color: "#555",
    fontSize: 16,
    textAlign: "center",
  },
});
