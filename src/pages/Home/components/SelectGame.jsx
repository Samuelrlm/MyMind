import React, { useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../../components/Button";
import { FontAwesome5 } from '@expo/vector-icons';

export default function SelectGameMode() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Button
          title="Um jogador"
          variant="secondary"
          iconLeft={
            <FontAwesome5 name="user-alt" size={26} color="white" />
          }
          onPress={() => navigation.navigate("GameConfig", { mode: "single" } )}
        />
        <Button
          title="Multiplayer"
          variant="secondary"
          iconLeft={
            <FontAwesome5 name="users" size={26} color="white" />
          }
          onPress={() => navigation.navigate("GameConfig", { mode: "multiplayer" } )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#242424",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  main: {
    width: "100%",
    gap: 10,
  }
});
