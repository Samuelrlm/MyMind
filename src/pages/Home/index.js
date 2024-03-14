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
import { PageBase } from "../../components/PageBase";
import NavBar from "../../components/NavBar";
import SelectGameMode from "./components/SelectGame";

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleLogout() {

  }

  return (
    <PageBase selectedtab="home">
      <SelectGameMode />
    </PageBase>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
});
