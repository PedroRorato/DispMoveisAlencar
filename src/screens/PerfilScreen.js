import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

//Context
import { useAuth } from "../contexts/AuthContext";

//Components
import BigButton from "../components/BigButton";
import Input from "../components/Input";

//Function
export default function PerfilScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");

  const { user, logout, perfil } = useAuth();

  useEffect(() => {
    setNome(user.nome);
    setSobrenome(user.sobrenome);
    setEmail(user.email);
  }, []);

  const formHandler = () => {
    if (nome == "" || sobrenome == "" || email == "") {
      Alert.alert("Dados Incompletos", "Verifique as informações passadas!", {
        text: "OK",
      });
      return;
    }
    //Atualizar
    perfil({ nome, sobrenome, email });
  };

  const passwordHandler = () => {
    Alert.alert(
      "Solicitação de troca de senha realizada",
      "Nas próximas 24h você receberá um email com instruções para a troca de senha.",
      {
        text: "OK",
      }
    );
  };

  return (
    <View style={styles.container}>
      <Input title="Nome" onChangeText={setNome} value={nome} />
      <Input title="Sobrenome" onChangeText={setSobrenome} value={sobrenome} />
      <Input title="Email" onChangeText={setEmail} value={email} />
      <BigButton title="SALVAR" onPress={formHandler} />
      <View style={styles.logoutContainer}>
        <BigButton title="TROCAR SENHA" onPress={passwordHandler} />
      </View>
      <View style={styles.logoutContainer}>
        <BigButton title="LOGOUT" onPress={logout} />
      </View>
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
