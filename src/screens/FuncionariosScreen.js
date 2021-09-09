import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

//Components
import FuncionarioCard from "../components/FuncionarioCard";

//Function
export default function FuncionariosScreen({ navigation, route }) {
  const { idServico, nomeServico, duracao, preco, funcionarios } = route.params;

  //Header
  const ListHeader = () => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Escolha o Profissional</Text>
      </View>
    );
  };

  //Renderização de itens
  const renderItem = ({ item }) => (
    <FuncionarioCard
      nome={item.nome}
      descricao={item.descricao}
      preco={item.preco}
      duracao={item.duracao}
      onPress={() =>
        navigation.navigate({
          name: "Agendar",
          params: {
            idServico,
            nomeServico,
            duracao,
            preco,
            idFuncionario: item.id,
            nomeFuncionario: item.nome,
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
