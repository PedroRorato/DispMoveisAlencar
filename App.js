import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Listagem from "./src/screens/Listagem";
import Empresa from "./src/screens/Empresa";
import Perfil from "./src/screens/Perfil";
import Login from "./src/screens/Login";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Empresa" component={Empresa} />
        <Screen name="Perfil" component={Perfil} />
      </Navigator>
    </NavigationContainer>
  );
}
