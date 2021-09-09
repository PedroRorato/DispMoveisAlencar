import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function EmpresaItem({ nome, endereco, foto, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image resizeMode="cover" style={styles.image} source={foto} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nome}>{nome}</Text>
          <Text style={styles.endereco}>{endereco}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    width: "100%",
  },
  imageContainer: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    height: 200,
    marginBottom: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
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
});
