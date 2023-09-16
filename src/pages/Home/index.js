import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../store/slices/loginSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(setLogin({}));
    AsyncStorage.removeItem("@user");

    navigation.navigate("AuthStack");
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  conteudo: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
});
