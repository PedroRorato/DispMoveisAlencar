import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import InicialScreen from "../screens/InicialScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function UnloggedRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inicial"
        component={InicialScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
