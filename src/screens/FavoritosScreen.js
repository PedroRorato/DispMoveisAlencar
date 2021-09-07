import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import EmpresaItem from "../components/EmpresaItem";

import barbearia from "../assets/barbearia.jpeg";

const DATA = [
  {
    id: 1,
    nome: "Barbearia 1",
    endereco: "Rua 1 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    nome: "Barbearia 2",
    endereco: "Rua 2 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    nome: "Barbearia 3",
    endereco: "Rua 4 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    nome: "Barbearia 4",
    endereco: "Rua 4 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 5,
    nome: "Barbearia 5",
    endereco: "Rua 5 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 6,
    nome: "Barbearia 6",
    endereco: "Avenida testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 7,
    nome: "Barbearia 7",
    endereco: "Rua 7 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 8,
    nome: "Barbearia 8",
    endereco: "Rua 8 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 9,
    nome: "Barbearia 9",
    endereco: "Rua 9 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 10,
    nome: "Barbearia 10",
    endereco: "Rua 10 testando essa porcaria lorem ipsum dolor sit amet.",
  },
  {
    id: 11,
    nome: "Barbearia 11",
    endereco: "Rua 11 testando essa porcaria lorem ipsum dolor sit amet.",
  },
];

export default function FavoritosScreen({ navigation }) {
  const [listaEmpresas, setListaEmpresas] = useState([]);

  useEffect(() => {
    setListaEmpresas(DATA);
  }, []);

  const renderItem = ({ item }) => (
    <EmpresaItem
      id={item.id}
      nome={item.nome}
      endereco={item.endereco}
      image={barbearia}
      onPress={() =>
        navigation.navigate({
          name: "Empresa",
          params: {
            id: item.id,
            nome: item.nome,
            endereco: item.endereco,
            image: barbearia,
          },
        })
      }
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={listaEmpresas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
    width: "100%",
  },
});
