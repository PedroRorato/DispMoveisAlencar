import React, { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

import BigButton from "../components/BigButton";
import Input from "../components/Input";
import Link from "../components/Link";

import logo from "../assets/logo_azul_vertical.png";

export default function PerfilScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = () => {
    console.log(email, password);
    if (password == "12345") {
      navigation.navigate("Logged");
    } else {
      Alert.alert("Dados Incorretos", "Verifique as informações passadas!", {
        text: "OK",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Input title="Nome" onChangeText={setNome} value={nome} />
      <Input title="Sobrenome" onChangeText={setSobrenome} value={sobrenome} />
      <Input title="Email" onChangeText={setEmail} value={email} />
      <BigButton title="SALVAR" onPress={formHandler} />
      <View style={styles.logoutContainer}>
        <BigButton
          title="TROCAR SENHA"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View style={styles.logoutContainer}>
        <BigButton
          title="LOGOUT"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      {/* <Link title="Inicial" onPress={() => navigation.navigate("Inicial")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  logoutContainer: {
    borderColor: "#ddd",
    borderTopWidth: 1,
    paddingTop: 20,
  },
});
