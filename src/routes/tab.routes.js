import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";

import EmpresasScreen from "../screens/EmpresasScreen";
import AgendamentosScreen from "../screens/AgendamentosScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Tab = createBottomTabNavigator();

export default function LoggedRoutes({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#2699FA",
        headerTintColor: "#2699FA",
        tabBarVisible: false,
      }}
    >
      <Tab.Screen
        name="Empresas"
        component={EmpresasScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Agendamentos"
        component={AgendamentosScreen}
        options={{
          tabBarLabel: "Agendamentos",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="calendar-alt" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
