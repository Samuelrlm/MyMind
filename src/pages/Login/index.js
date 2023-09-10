import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import { LinearGradient } from "expo-linear-gradient";
import googleIcon from "../../../assets/google-icon.png";
import githubIcon from "../../../assets/github-icon-branco.png";
import facebookIcon from "../../../assets/face-icon-azul.png";

const optionsLogin = [
  {
    name: "Google",
    icon: googleIcon,
    background: "#ffffff",
  },
  {
    name: "Facebook",
    icon: facebookIcon,
    background: "#3B5998",
  },
  {
    name: "Github",
    icon: githubIcon,
    background: "#5C5C5C",
  },
];

export default function LoginPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.Image}
          source={require("../../../assets/logo.png")}
        />
      </View>
      <View style={styles.containerContent}>
        <View style={styles.cardLogin}>
          <View style={styles.loginInfos}>
            <CustomTextInput placeholder="E-mail" />
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <CustomTextInput placeholder="Senha" />
              <TouchableOpacity style={styles.btnPass}>
                <Text style={styles.labelLink}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <LinearGradient
              colors={["#6b6dd8", "#841FDC"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.btnLogin}
            >
              <Text style={styles.loginName}>Entrar</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.blankLine}>
          <View style={styles.line} />
          <Text style={styles.label}>ou</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.cardOptions}>
          {optionsLogin.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={{
                width: "100%",
                height: 50,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 5,
                backgroundColor: "transparent",
                borderWidth: 1,
                borderColor: "#242424",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 10,
                  gap: 10,
                  width: "100%",
                }}
              >
                <View style={{ width: "20%", height: "100%" }}>
                  <Image
                    style={{
                      width: 35,
                      height: 35,
                    }}
                    source={item.icon}
                  />
                </View>
                <View style={{ width: "100%", height: "100%", position: "absolute", alignItems:"center", justifyContent: "center" }}>
                    <Text style={{ color: "#fff", fontSize: 15 }}> Entrar com <Text style={{
                        fontWeight: "bold",
                    }}>
                    {item.name}</Text></Text>

                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  containerLogo: {
    width: "100%",
    height: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerContent: {
    width: "100%",
    height: "60%",
    alignItems: "center",
  },
  loginName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  Image: {
    width: 200,
    height: 200,
  },
  cardLogin: {
    width: "90%",
    height: "auto",
    backgroundColor: "#242424",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  loginInfos: {
    width: "100%",
    gap: 10,
  },
  label: {
    color: "#f0f0f0",
    fontSize: 11,
  },
  btnPass: {
    width: "40%",
  },
  labelLink: {
    color: "#2D7DFF",
    fontSize: 11,
    marginRight: 5,
    marginTop: 5,
  },
  blankLine: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    gap: 10,
  },
  line: {
    width: "40%",
    height: 1,
    backgroundColor: "#5A5A5A",
  },
  btnLogin: {
    width: "100%",
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  cardOptions: {
    width: "90%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});
