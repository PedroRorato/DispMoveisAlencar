import React, { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

//Context
import { useAuth } from "../contexts/AuthContext";

//Components
import BigButton from "../components/BigButton";
import Input from "../components/Input";
import Link from "../components/Link";

import logo from "../assets/logo_azul_vertical.png";

//Function
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const formHandler = () => {
    if (email == "" || password == "") {
      Alert.alert("Formulário Incompleto", "Preencha todos os campos!", {
        text: "OK",
      });
      return;
    }

    //Chamada API
    try {
      let data = { email, password };
      login(data);
    } catch (error) {
      Alert.alert("Dados Incorretos", "Verifique as informações passadas!", {
        text: "OK",
      });
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.logo} source={logo} />
      <Input
        title="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        p
      />
      <Input
        title="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <BigButton title="LOGIN" onPress={formHandler} />
      <Text style={styles.texto}>Ainda não possui uma conta?</Text>
      <Link title="Cadastrar" onPress={() => navigation.navigate("Register")} />
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
