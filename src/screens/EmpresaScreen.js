import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function EmpresaScreen({ route }) {
  const { nome, endereco, image } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image resizeMode="cover" style={styles.image} source={image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.endereco}>{endereco}</Text>
        </View>
      </View>
      <Text style={styles.servicoText}>Serviços</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    width: "100%",
  },
  imageContainer: {
    height: 200,
    marginBottom: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
  },
  textContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  nome: {
    color: "#2699FA",
    fontSize: 20,
    marginBottom: 5,
  },
  endereco: {
    color: "#555",
    fontSize: 16,
  },
  servicoText: {
    textAlign: "center",
    color: "#2699FA",
    fontSize: 26,
    fontWeight: "500",
  },
});
