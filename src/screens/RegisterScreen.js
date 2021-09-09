import React, { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { useAuth } from "../contexts/AuthContext";

import BigButton from "../components/BigButton";
import Input from "../components/Input";
import Link from "../components/Link";

import logo from "../assets/logo_azul_vertical.png";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const formHandler = async () => {
    if (nome == "" || sobrenome == "" || email == "" || password == "") {
      Alert.alert("Formulário Incompleto", "Preencha todos os campos!", {
        text: "OK",
      });
      return;
    }
    let data = { nome, sobrenome, email, password, tipo: "cliente" };

    try {
      await login(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.contentContainer}
    >
      <Image resizeMode="contain" style={styles.logo} source={logo} />
      <Input
        title="Nome"
        onChangeText={setNome}
        value={nome}
        returnKeyType="next"
      />
      <Input title="Sobrenome" onChangeText={setSobrenome} value={sobrenome} />
      <Input
        title="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        title="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <BigButton title="CADASTRAR" onPress={formHandler} />
      <Text style={styles.texto}>Já possui conta?</Text>
      <Link title="Login" onPress={() => navigation.navigate("Login")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#fff",
    height: 100,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentContainer: {
    alignItems: "center",
    paddingBottom: 10,
  },
  logo: {
    maxWidth: "90%",
    marginBottom: 20,
    maxHeight: 100,
  },
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
  texto: {
    color: "#555",
    fontSize: 20,
    marginBottom: 20,
  },
});
