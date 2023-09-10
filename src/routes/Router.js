import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useSelector } from "react-redux";

export function Router() {
    const auth = useSelector((state) => state.login.login);

  return (
    <NavigationContainer>
        {auth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
