import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AgendamentoCard from "../components/AgendamentoCard";

import barbearia from "../assets/barbearia.jpeg";

const DATA = [
  {
    id: 1,
    data: "9 de Julho | 10:00",
    servico: "Corte de Cabelo",
    empresa: "Barbearia do Zé",
  },
  {
    id: 2,
    data: "10 de Julho | 20:00",
    servico: "Barba",
    empresa: "Barbearia Fígaro",
  },
  {
    id: 3,
    data: "19 de Julho | 12:00",
    servico: "Pezinho",
    empresa: "Barbearia Dom",
  },
  {
    id: 4,
    data: "8 de Agosto | 8:00",
    servico: "Massagem",
    empresa: "Massoterapia Holistica",
  },
  {
    id: 5,
    data: "29 de Agosto | 15:00",
    servico: "Consulta Médica",
    empresa: "Dr Frankenstein",
  },
  {
    id: 6,
    data: "7 de Setembro | 15:00",
    servico: "Corte de Cabelo",
    empresa: "Barbearia do Zé",
  },
  {
    id: 7,
    data: "20 de Julho | 10:00",
    servico: "Corte de Cabelo",
    empresa: "Barbearia do Zé",
  },
];

const renderItem = ({ item }) => (
  <AgendamentoCard
    id={item.id}
    data={item.data}
    servico={item.servico}
    empresa={item.empresa}
  />
);

export default function AgendamentosScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={DATA}
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
    paddingVertical: 10,
    width: "100%",
  },
});
