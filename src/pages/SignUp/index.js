import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import arrowLeft from "../../../assets/icons/left.png";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import CustomTextInput from "../../components/CustomTextInput";
import userIcon from "../../../assets/icons/user-solid.png";
import emailIcon from "../../../assets/icons/email-solid.png";
import keyIcon from "../../../assets/icons/key.png";

const inputsList = [
  {
    name: "Nome",
    placeholder: "Nome",
    type: "text",
    icon: userIcon,
  },
  {
    name: "E-mail",
    placeholder: "E-mail",
    type: "email",
    icon: emailIcon,
  },
  {
    name: "Telefone",
    placeholder: "Telefone",
    type: "phone",
  },
  {
    name: "Senha",
    placeholder: "Senha",
    type: "password",
    icon: keyIcon,
  },
];

export function SignUpPage() {
  const navigation = useNavigation();
  const [inputValues, setInputValues] = React.useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    gender: "",
    checked: false,
  });

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hearder}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.containerIcon}
        >
          <Image source={arrowLeft} style={styles.arrowLeft} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerContent}>
        {inputsList.map((input, index) => {
          return (
            <View key={index} style={styles.containerInput}>
              <Text style={styles.textInput}>{input.name}</Text>
              <CustomTextInput
                iconImage={input.icon}
                placeholder={input.placeholder}
                customHeight={50}
                type={input.type}
                onChange={(text) =>
                  setInputValues({ ...inputValues, [input.name]: text })
                }
              />
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <View style={styles.containerTerms}>
          <CheckBox />
          <TouchableOpacity>
            <Text
              style={{
                color: "#ffffff",
                fontSize: 11,
              }}
            >
              Li e concordo com os{" "}
              <Text style={styles.textTerms}>termos de uso</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <Button title="Cadastrar" variant="secondary" />
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
  },
  hearder: {
    width: "100%",
    height: "8%",
    padding: 10,
    paddingLeft: 15,
    justifyContent: "center",
    position: "relative",
  },
  containerIcon: {
    width: 28,
    height: 28,
    borderRadius: 50,
    zIndex: 50,
  },
  arrowLeft: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  containerContent: {
    width: "95%",
    height: "74%",
    backgroundColor: "#242424",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: 10,
  },
  footer: {
    width: "95%",
    height: "18%",
  },
  textTerms: {
    color: "#2D7DFF",
    fontSize: 11,
    marginRight: 5,
  },
  containerTerms: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    gap: 7,
  },
  containerButton: {
    width: "100%",
    height: "50%",
    justifyContent: "flex-end",
  },
  containerInput: {
    width: "100%",
    height: "auto",
  },
  textInput: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 5,
  },
});
