import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function AgendaScreen() {
  return (
    <View style={styles.container}>
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
            // dots: [vacation, massage, workout],
            selected: true,
            selectedColor: "#2699FA",
          },
        }}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Horários Disponíveis</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Horários Disponíveis</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  calendar: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
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
});
