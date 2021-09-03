import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoggedRoutes from "./src/routes/logged.routes";
import UnloggedRoutes from "./src/routes/unlogged.routes";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Unlogged"
          component={UnloggedRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Logged"
          component={LoggedRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
