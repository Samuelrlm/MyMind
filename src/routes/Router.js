import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; 
import { AppStack } from "./AppStack";
import { AuthStack } from "./AuthStack";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLogin } from "../store/slices/loginSlice";

export function Router() {
  const Stack = createStackNavigator();
  const authUser = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("@user").then((token) => {
      if (token) {
        dispatch(setLogin({ token }));
      }
    });
  }, []);

  const isAuthenticated = authUser.token !== "";

  console.log(isAuthenticated);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isAuthenticated ? (
          <Stack.Screen name="AppStack" component={AppStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
