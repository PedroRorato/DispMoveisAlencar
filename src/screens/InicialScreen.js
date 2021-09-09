import React from "react";
import { Image, StyleSheet, View } from "react-native";

import BigButton from "../components/BigButton";

import logo from "../assets/logo_azul_horizontal_1.png";

export default function InicialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image resizeMode="contain" style={styles.logo} source={logo} />
      </View>
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
  logoContainer: {
    maxHeight: 300,
    marginBottom: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  logo: {
    height: "100%",
    width: "100%",
  },
});
