import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Context
import { useAuth } from "../contexts/AuthContext";

//Unlogged
import UnloggedRoutes from "../routes/unlogged.routes";
//Logged With Tabs
import TabRoutes from "../routes/tab.routes";
//Logged Without Tabs
import EmpresaScreen from "../screens/EmpresaScreen";
import FuncionariosScreen from "../screens/FuncionariosScreen";
import AgendaScreen from "../screens/AgendaScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator({ navigation }) {
  const { user } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#2699FA",
      }}
    >
      {!user ? (
        <Stack.Screen
          name="Unlogged"
          component={UnloggedRoutes}
          options={{ headerShown: false }}
        />
      ) : (
        <>
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
            name="Funcionarios"
            component={FuncionariosScreen}
            options={{
              title: "Funcionários",
            }}
          />
          <Stack.Screen
            name="Agendar"
            component={AgendaScreen}
            options={{
              title: "Reservar um horário",
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
