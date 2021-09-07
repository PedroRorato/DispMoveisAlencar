import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabRoutes from "./src/routes/tab.routes";
import UnloggedRoutes from "./src/routes/unlogged.routes";

import EmpresaScreen from "./src/screens/EmpresaScreen";
import FuncionariosScreen from "./src/screens/FuncionariosScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "#2699FA",
          }}
        >
          <Stack.Screen
            name="Unlogged"
            component={UnloggedRoutes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={TabRoutes}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Empresa"
            component={EmpresaScreen}
            options={({ route }) => ({
              title: route.params.nome,
            })}
          />
          <Stack.Screen
            name="Funcionários"
            component={FuncionariosScreen}
            // options={({ route }) => ({
            //   title: route.params.nome,
            // })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
