import React from "react";
import { Image, StyleSheet, View } from "react-native";

import BigButton from "../components/BigButton";

import logo from "../assets/logo_azul_horizontal_1.png";

export default function InicialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image resizeMode="center" style={styles.logo} source={logo} />
      <BigButton title="LOGIN" onPress={() => navigation.navigate("Login")} />
      <BigButton
        title="CADASTRO"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    maxHeight: 300,
    marginBottom: 10,
  },
});
