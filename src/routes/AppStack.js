import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginPage from "../pages/Login";
import { SignUpPage } from "../pages/SignUp";
import Home from "../pages/Home";
import GameConfig from "../pages/GameConfig";
import SingleGame from "../pages/SingleGame/indes";

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GameConfig" component={GameConfig} />
      <Stack.Screen name="SingleGame" component={SingleGame} />
    </Stack.Navigator>
  );
}
