import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import CustomTextInput from "../../components/CustomTextInput";
import { FontAwesome5 } from '@expo/vector-icons';

export function SignUpPage() {
  const navigation = useNavigation();
  const [passwordLevel, setPasswordLevel] = useState(0);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    checked: false,
  });

  const inputsList = [
    {
      name: "Nome",
      placeholder: "Nome",
      type: "text",
      icon: <FontAwesome5 name="user" size={20} color="#A0A0A0" />,
      value: 'name',
    },
    {
      name: "E-mail",
      placeholder: "E-mail",
      type: "email",
      icon: <FontAwesome5 name="envelope" size={20} color="#A0A0A0" />,
      value: 'email',
    },
    {
      name: "Telefone",
      placeholder: "xx xxxxx-xxxx",
      type: "phone",
      icon: <FontAwesome5 name="phone" size={20} color="#A0A0A0" />,
      value: 'phoneNumber',
    },
    {
      name: "Senha",
      placeholder: "Senha",
      type: "password",
      icon: <FontAwesome5 name="key" size={20} color="#A0A0A0" />,
      value: 'password',
    }
  ];

  function verifyPasswordLevel(password) {
    let level = 0;
    if (password.length >= 8) {
      level++;
    }
    
    if (password.match(/[0-9]/) && password.length >= 8) {
      level++;
    }

    if (password.match(/[$&+,:;=?@#|'<>.^*()%!-]/) && password.length >= 8) {
      level++;
    }

    setPasswordLevel(level); 
  }

  useEffect(() => {
    verifyPasswordLevel(inputValues.password);
  }, [inputValues.password]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hearder}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.containerIcon}
        >
          <FontAwesome5 name="arrow-left" size={27} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerContent}>
        {inputsList.map((input, index) => {
          return (
            <View key={index} style={styles.containerInput}>
              <Text style={styles.textInput}>{input.name}</Text>
              <CustomTextInput
                icon={input.icon}
                placeholder={input.placeholder}
                customHeight={50}
                type={input.type}
                value={input.value}
                onChange={(value) =>
                  setInputValues({ ...inputValues, [input.value]: value })
                }
              />
            </View>
          );
        })}
        <View style={styles.levelPassword}>
            <View
              style={{
                ...styles.containerLevelPassword,
                backgroundColor: passwordLevel >= 1 ? "#FF2D2D" : "#4B4B4B",
              }}
            />
            <View
              style={{
                ...styles.containerLevelPassword,
                backgroundColor: passwordLevel >= 2 ? "#FFD12D" : "#4B4B4B",
              }}
            />
            <View
              style={{
                ...styles.containerLevelPassword,
                backgroundColor: passwordLevel >= 3 ? "#2DFF2D" : "#4B4B4B",
              }}
            />
        </View>
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
          <Button title="Cadastrar" variant="secondary"/>
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
  levelPassword: {
    width: "100%",
    height: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  containerLevelPassword: {
    width: 100,
    height: 10,
    backgroundColor: "#4B4B4B",
    borderRadius: 5,
  },
});
