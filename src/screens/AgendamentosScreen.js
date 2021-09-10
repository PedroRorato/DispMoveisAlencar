import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

//API
import api from "../services/api";

//Components
import AgendamentoCard from "../components/AgendamentoCard";

//Render Item
const renderItem = ({ item }) => (
  <AgendamentoCard
    id={item.id}
    data={item.data}
    servico={item.servico}
    empresa={item.empresa}
  />
);

//Function
export default function AgendamentosScreen() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("agendamentos");
      let data = response.data;
      setAgendamentos(data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={agendamentos}
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
