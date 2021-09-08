import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import FuncionarioCard from "../components/FuncionarioCard";

const DATA = [
  {
    id: 1,
    nome: "Pedro Barbeiro da Silva",
    foto: "qualquelbosta",
  },
  {
    id: 2,
    nome: "João Manoel de Almeida",
    foto: "qualquelbosta",
  },
  {
    id: 3,
    nome: "Thiago Joarez Emanuel",
    foto: "qualquelbosta",
  },
];

export default function FuncionariosScreen({ navigation, route }) {
  const { idServico, nomeServico } = route.params;

  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    setFuncionarios(DATA);
  }, []);

  const ListHeader = () => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Escolha o Profissional</Text>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <FuncionarioCard
      nome={item.nome}
      descricao={item.descricao}
      preco={item.preco}
      duracao={item.duracao}
      onPress={() =>
        navigation.navigate({
          name: "Agenda",
          params: {
            idFuncionario: item.id,
            idServico,
            nomeServico,
          },
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={funcionarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={ListHeader}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginVertical: 15,
  },
  text: {
    textAlign: "center",
    color: "#2699FA",
    fontSize: 26,
    fontWeight: "500",
  },
  list: {
    width: "100%",
  },
});
