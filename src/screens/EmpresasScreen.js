import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

//API
import api from "../services/api";

//Components
import EmpresaItem from "../components/EmpresaItem";

import barbearia from "../assets/barbearia.jpeg";

//Function
export default function EmpresasScreen({ navigation }) {
  const [listaEmpresas, setListaEmpresas] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get("empresas");
      let data = response.data;
      setListaEmpresas(data);
    })();
  }, []);

  const renderItem = ({ item }) => (
    <EmpresaItem
      nome={item.nome}
      endereco={item.endereco}
      foto={barbearia}
      onPress={() =>
        navigation.navigate({
          name: "Empresa",
          params: { id: item.id },
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
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 10,
    width: "100%",
  },
});
