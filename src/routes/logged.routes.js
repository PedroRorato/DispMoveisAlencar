import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import EmpresasScreen from "../screens/EmpresasScreen";
import FavoritosScreen from "../screens/FavoritosScreen";
import AgendamentosScreen from "../screens/AgendamentosScreen";
import PerfilScreen from "../screens/PerfilScreen";

const Tab = createBottomTabNavigator();

export default function LoggedRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Empresas" component={EmpresasScreen} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Agendamentos" component={AgendamentosScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
