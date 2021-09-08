import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

import user from "../assets/user.png";

export default function FuncionarioCard({ nome, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.fakeMargin}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image resizeMode="cover" style={styles.image} source={user} />
          </View>
          <View style={styles.textos}>
            <Text style={styles.nome}>{nome}</Text>
          </View>
          <SimpleLineIcons name="arrow-right" size={24} color="#2699FA" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  fakeMargin: {
    paddingHorizontal: 10,
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    height: 50,
    width: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textos: {
    flex: 1,
    paddingHorizontal: 12,
  },
  nome: {
    color: "#2699FA",
    fontSize: 18,
    fontWeight: "500",
  },
});
