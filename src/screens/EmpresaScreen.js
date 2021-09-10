import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

//API
import api from "../services/api";

//Components
import ServicoCard from "../components/ServicoCard";

//Function
export default function EmpresaScreen({ navigation, route }) {
  const { id } = route.params;

  const [empresa, setEmpresa] = useState({});
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get(`empresas/${id}`);
      let data = response.data;
      setEmpresa(data);
      setServicos(data.servicos);
      console.log("foto: ", data.foto);
    })();
  }, []);

  const ListHeader = () => {
    return (
      <>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: empresa.foto }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.nome}>{empresa.nome}</Text>
            <Text style={styles.endereco}>{empresa.endereco}</Text>
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
            idServico: item.id,
            nomeServico: item.nome,
            duracao: item.duracao,
            preco: item.preco,
            funcionarios: item.funcionarios,
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
    height: "100%",
    width: "100%",
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
