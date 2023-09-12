import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import googleIcon from "../../../assets/google-icon.png";
import githubIcon from "../../../assets/github-icon-branco.png";
import facebookIcon from "../../../assets/face-icon-azul.png";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import loginAuth from "../../services/session/login";

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
  const navigation = useNavigation();
  const [inputValues, setInputValues] = React.useState({
    email: "",
    password: "",
  });

  function handleLogin() {
    loginAuth({
      email: inputValues.email,
      password: inputValues.password,
    });
  }

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
            <CustomTextInput
              placeholder="E-mail"
              icon={<Entypo name="mail" size={20} color="#A0A0A0" />}
              onChange={(value) =>
                setInputValues({ ...inputValues, email: value })
              }
            />
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <CustomTextInput
                onChange={(value) =>
                  setInputValues({ ...inputValues, password: value })
                }
                placeholder="Senha"
                type="password"
                icon={<FontAwesome5 name="key" size={20} color="#A0A0A0" />}
              />
              <TouchableOpacity style={styles.btnPass}>
                <Text style={styles.labelLink}>Esqueceu sua senha?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ width: "100%", marginTop: 10 }}>
            <Button variant="primary" title="Entrar" onPress={
              handleLogin
            } />
          </View>
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
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 15 }}>
                    {" "}
                    Entrar com{" "}
                    <Text
                      style={{
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("SignUp")}
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              marginTop: 5,
            }}
          >
            <Text style={styles.labelSignUp}>
              Não tem uma conta? Cadastre-se
            </Text>
          </TouchableOpacity>
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
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
  },
  containerContent: {
    width: "100%",
    height: "65%",
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
    paddingVertical: 14,
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
  labelSignUp: {
    color: "#2D7DFF",
    fontSize: 17,
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
  cardOptions: {
    width: "90%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});
