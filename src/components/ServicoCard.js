import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function ServicoCard({
  nome,
  descricao,
  preco,
  duracao,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.fakeMargin}>
        <View style={styles.container}>
          <View style={styles.textos}>
            <Text style={styles.t1}>{nome}</Text>
            <Text style={styles.t2}>{descricao}</Text>
          </View>
          <View style={styles.numeros}>
            <Text style={styles.t1}>{preco}</Text>
            <Text style={styles.t2}>{duracao}</Text>
          </View>
          <SimpleLineIcons
            style={styles.icon}
            name="arrow-right"
            size={24}
            color="#2699FA"
          />
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
    paddingVertical: 12,
    width: "100%",
    flex: 1,
    flexDirection: "row",
  },
  textos: {
    flex: 1,
  },
  t1: {
    color: "#2699FA",
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 8,
  },
  t2: {
    color: "#555",
    fontSize: 14,
  },
  numeros: {
    height: "100%",
    paddingLeft: 12,
    // backgroundColor: "lightgray",
  },
  icon: {
    paddingLeft: 7,
  },
});
