import React, { useState } from "react";
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
import { login } from "../../services/session/login";
import Toast from "react-native-toast-message";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/slices/loginSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  async function handleLogin() {
    const lowerCaseEmail = inputValues.email.toLowerCase();

    if (inputValues.email === "" || inputValues.password === "") {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Preencha todos os campos",
        position: "top",
        visibilityTime: 4000,
        autoHide: true,
        bottomOffset: 40,
      });
    } else if (inputValues.password.length < 6) {
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "A senha deve conter no mínimo 6 caracteres",
        position: "top",
        visibilityTime: 4000,
        autoHide: true,
        bottomOffset: 40,
      });
    }
    else {
      const response = await login(lowerCaseEmail, inputValues.password);

      if (response.user !== undefined) {

        const userData = {
          name: response.user.name,
          email: response.user.email,
          token: response.user.token,
          id: response.user.id,
        }

        dispatch(setLogin(userData));
        await AsyncStorage.setItem("@user", JSON.stringify(userData));
      }
    }
  }

  async function handleVisitor() {
    navigation.navigate("Home");
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
            <Button variant="primary" title="Entrar" onPress={handleLogin} />
          </View>
        </View>
        <View style={styles.blankLine}>
          <View style={styles.line} />
          <Text style={styles.label}>ou</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.cardOptions}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleVisitor}
            style={styles.buttonOptions}>
            <View
              style={{
                flexDirection: "row",
                paddingLeft: 10,
                gap: 10,
                width: "100%",
              }}>
              <View style={{ width: "20%", height: "100%" }}>
                <FontAwesome5 name="user" size={30} color="#A0A0A0" />
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
                  Entrar como visitate
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {optionsLogin.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={styles.buttonOptions}
            >
              <View
                style={{
                  flexDirection: "row",
                  paddingLeft: 10,
                  gap: 10,
                  width: "100%",
                }}>
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
  buttonOptions: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#242424",
  },
});
