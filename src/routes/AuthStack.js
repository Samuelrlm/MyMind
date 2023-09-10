import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginPage from "../pages/Login";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
}
