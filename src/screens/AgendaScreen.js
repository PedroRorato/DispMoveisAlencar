import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Calendar } from "react-native-calendars";

//API
import api from "../services/api";

//Components
import TimeButton from "../components/TimeButton";
import BigButton from "../components/BigButton";

//Constantes
const meses = {
  1: "Janeiro",
  2: "Fevereiro",
  3: "Março",
  4: "Abril",
  5: "Maio",
  6: "Junho",
  7: "Julho",
  8: "Agosto",
  9: "Setembro",
  10: "Outubro",
  11: "Novembro",
  12: "Dezembro",
};

export default function AgendaScreen({ navigation, route }) {
  const {
    idFuncionario,
    idServico,
    nomeServico,
    duracao,
    preco,
    nomeFuncionario,
  } = route.params;

  const [minDate, setMinDate] = useState("");
  const [markedDates, setMarkedDates] = useState({});
  const [date, setDate] = useState("");
  const [dateText, setDateText] = useState("");
  const [horarios, setHorarios] = useState([]);
  const [horario, setHorario] = useState("?");

  useEffect(() => {
    (async () => {
      let newDate = new Date();
      setDateText(`${newDate.getDate()} de ${meses[newDate.getMonth() + 1]}`);
      let dateString = newDate.toISOString().split("T")[0];
      setMinDate(dateString);
      setDate(dateString);
      let marked = {};
      marked[dateString] = {
        selected: true,
        selectedColor: "#2699FA",
      };
      setMarkedDates(marked);
      const response = await api.get("horarios-disponiveis");
      let data = response.data;
      setHorarios(data);
    })();
  }, []);

  const setDateHandler = async (date) => {
    setDateText(`${date.day} de ${meses[date.month]}`);
    setDate(date.dateString);
    let marked = {};
    marked[date.dateString] = {
      selected: true,
      selectedColor: "#2699FA",
    };
    setMarkedDates(marked);
    const response = await api.get("horarios-disponiveis");
    let data = response.data;
    setHorarios(data);
  };

  const formHandler = () => {
    if (date == "" || horario == "?") {
      Alert.alert(
        "Dados Incompletos!",
        "Selecione a data e a hora antes de reservar.",
        {
          text: "OK",
        }
      );
      return;
    }
    Alert.alert(
      "Horário reservado com sucesso!",
      "Por favor, chegue 5 minutos antes do horário marcado.",
      {
        text: "OK",
      }
    );
    navigation.navigate("Empresas");
  };

  const renderItem = ({ item }) => (
    <TimeButton
      horario={item.horario}
      onPress={() => setHorario(item.horario)}
    />
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Calendar
          style={styles.calendar}
          hideExtraDays
          minDate={minDate}
          // disableArrowLeft={true}
          onDayPress={(day) => {
            setDateHandler(day);
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
          markedDates={markedDates}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>Horários Disponíveis</Text>
        </View>
        <FlatList
          horizontal
          style={styles.list}
          data={horarios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Informações da reserva</Text>
          <Text style={styles.servico}>{nomeServico}</Text>
          <Text style={styles.preco}>
            {nomeFuncionario} - {preco}
          </Text>
          <Text style={styles.data}>
            {dateText} | {horario}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <BigButton title="RESERVAR" onPress={formHandler} />
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
