import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

import ServicoCard from "../components/ServicoCard";

const DATA = [
  {
    id: 1,
    nome: "Corte de Cabelo",
    descricao: "Corte de cabelo com tesoura.",
    preco: "R$ 40,00",
    duracao: "1h",
  },
  {
    id: 2,
    nome: "Cabelo e Barba",
    descricao:
      "Corte de cabelo completo feito com navalha e toalha quente. Barba com máquina e navalha.",
    preco: "R$ 60,00",
    duracao: "1h30m",
  },
  {
    id: 3,
    nome: "Barba Completa",
    descricao: "Barba com máquina e navalha.",
    preco: "R$ 30,00",
    duracao: "1h",
  },
  {
    id: 4,
    nome: "Pezinho",
    descricao: "Remoção dos cabelos do pescoço e ao redor da orelha.",
    preco: "R$ 20,00",
    duracao: "30m",
  },
  {
    id: 5,
    nome: "Corte de Cabelo",
    descricao: "Corte de cabelo com tesoura.",
    preco: "R$ 40,00",
    duracao: "1h30m",
  },
  {
    id: 6,
    nome: "Cabelo e Barba",
    descricao:
      "Corte de cabelo completo feito com navalha e toalha quente. Barba com máquina e navalha.",
    preco: "R$ 60,00",
    duracao: "1h30m",
  },
  {
    id: 7,
    nome: "Barba Completa",
    descricao: "Barba com máquina e navalha.",
    preco: "R$ 30,00",
    duracao: "1h",
  },
];

export default function EmpresaScreen({ navigation, route }) {
  const { nome, endereco, image } = route.params;

  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    setServicos(DATA);
  }, []);

  const ListHeader = () => {
    return (
      <>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image resizeMode="cover" style={styles.image} source={image} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nome}>{nome}</Text>
            <Text style={styles.endereco}>{endereco}</Text>
          </View>
        </View>
        <Text style={styles.servicoText}>Serviços</Text>
      </>
    );
  };

  const renderItem = ({ item }) => (
    <ServicoCard
      nome={item.nome}
      descricao={item.descricao}
      preco={item.preco}
      duracao={item.duracao}
      onPress={() =>
        navigation.navigate({
          name: "Funcionarios",
          params: {
            id: item.id,
          },
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={servicos}
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
  },
  profileContainer: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
    width: "100%",
  },
  imageContainer: {
    height: 200,
    marginBottom: 8,
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
  },
  textContainer: {
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  nome: {
    color: "#2699FA",
    fontSize: 20,
    marginBottom: 5,
  },
  endereco: {
    color: "#555",
    fontSize: 16,
  },
  servicoText: {
    textAlign: "center",
    color: "#2699FA",
    fontSize: 26,
    fontWeight: "500",
    marginBottom: 15,
  },
  list: {
    width: "100%",
  },
});
