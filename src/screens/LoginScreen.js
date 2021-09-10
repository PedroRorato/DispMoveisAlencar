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
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const formHandler = () => {
    setIsLoading(true);
    //Sanitização
    // if (email == "" || password == "") {
    //   Alert.alert("Formulário Incompleto", "Preencha todos os campos!", {
    //     text: "OK",
    //   });
    //   setIsLoading(false);
    //   return;
    // }

    //Chamada API
    try {
      let data = { email: "c1@gmail.com", password: "12345" }; //{ email, password };
      login(data);
    } catch (error) {
      Alert.alert("Dados Incorretos", "Verifique as informações passadas!", {
        text: "OK",
      });
      console.log(error);
    }
    setIsLoading(false);
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
      {/* <Link title="Inicial" onPress={() => navigation.navigate("Inicial")} /> */}
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
