import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

import TimeButton from "../components/TimeButton";
import BigButton from "../components/BigButton";

const DATA = [
  {
    id: 1,
    horario: "9:00",
  },
  {
    id: 2,
    horario: "10:00",
  },
  {
    id: 3,
    horario: "11:00",
  },
  {
    id: 4,
    horario: "14:00",
  },
  {
    id: 5,
    horario: "15:00",
  },
  {
    id: 6,
    horario: "16:00",
  },
  {
    id: 7,
    horario: "17:00",
  },
  {
    id: 8,
    horario: "20:00",
  },
  {
    id: 9,
    horario: "21:00",
  },
];

const renderItem = ({ item }) => (
  <TimeButton
    horario={item.horario}
    onPress={() => console.log("Pressionado")}
  />
);

export default function AgendaScreen({ navigation, route }) {
  const {
    idFuncionario,
    idServico,
    nomeServico,
    duracao,
    preco,
    nomeFuncionario,
  } = route.params;

  const [date, setDate] = useState("");

  const setDateHandler = () => {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Escolha o Profissional</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Calendar
          style={styles.calendar}
          hideExtraDays
          minDate={"2021-09-08"}
          // disableArrowLeft={true}
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          theme={{
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#2699FA",
            dayTextColor: "#2d4150",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "#2699FA",
            monthTextColor: "#2699FA",
            textDayHeaderFontWeight: "500",
          }}
          markedDates={{
            "2021-09-09": {
              selected: true,
              selectedColor: "#2699FA",
            },
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Horários Disponíveis</Text>
        </View>
        <FlatList
          horizontal
          style={styles.list}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Informações da reserva</Text>
          <Text style={styles.servico}>{nomeServico}</Text>
          <Text style={styles.preco}>
            {nomeFuncionario} - {preco}
          </Text>
          <Text style={styles.data}>9 de Julho | 10:00</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <BigButton
          title="RESERVAR"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  calendar: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  textContainer: {
    marginVertical: 15,
  },
  text: {
    textAlign: "center",
    color: "#2699FA",
    fontSize: 20,
    fontWeight: "500",
  },
  list: {
    maxHeight: 70,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  infoContainer: {
    flex: 1,
    marginVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  data: {
    color: "#555",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
  },
  servico: {
    color: "#555",
    fontSize: 20,
    marginTop: 12,
    marginBottom: 8,
    textAlign: "center",
  },
  preco: {
    color: "#555",
    marginBottom: 8,
    fontSize: 16,
    textAlign: "center",
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingTop: 15,
  },
});
