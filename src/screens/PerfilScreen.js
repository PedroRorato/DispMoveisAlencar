import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function PerfilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <Button
        title="Logout"
        onPress={() => navigation.navigate("Login", { color: "red" })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
