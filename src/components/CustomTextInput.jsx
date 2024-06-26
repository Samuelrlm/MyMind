import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import flag from "../../assets/brazilFlag.png";

export default function CustomTextInput({
  placeholder,
  bgColor = "#000",
  customHeight = 40,
  type = "default",
  onChange,
  icon,
}) {
  function getKeyboardType(type) {
    switch (type) {
      case "email":
        return "email-address";
      case "number":
        return "numeric";
      case "phone":
        return "phone-pad";
      default:
        return "default";
    }
  }

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {type === "password" && (
        <View
          style={[
            styles.textInput,
            {
              flexDirection: "row",
              backgroundColor: bgColor,
              height: customHeight,
            },
          ]}
        >
          {icon && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              {icon}
            </View>
          )}
          <TextInput
            style={
              icon
                ? { width: "84%", color: "#ffffff" }
                : { width: "90%", color: "#ffffff" }
            }
            placeholder={placeholder}
            placeholderTextColor="#A0A0A0"
            secureTextEntry={showPassword ? false : true}
            keyboardType={getKeyboardType(type)}
            onChangeText={onChange}
          />
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {showPassword ? (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Ionicons name="eye-off" size={20} color="#A0A0A0" />
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <Ionicons name="eye" size={20} color="#A0A0A0" />
              </View>
            )}
          </TouchableOpacity>
        </View>
      )}
      {type === "phone" && (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={[styles.containerFlag, { height: customHeight, backgroundColor: "transparent" }]}>
            <Image
              source={flag}
              style={{
                width: 30,
                height: 20,
                resizeMode: "contain",
              }}
            />
          </View>
          <View
            style={[
              styles.textInput,
              { backgroundColor: bgColor, height: customHeight, width: "85%" },
            ]}
          >
            <View style={[styles.preFix, {height: customHeight}]}>
              <Text style={{color: "#A0A0A0", marginLeft: 20, marginRight: 5}}>
                +55
              </Text>
              <TextInput
                style={{ width: "100%", color: "#ffffff" }}
                placeholder={placeholder}
                placeholderTextColor="#A0A0A0"
                keyboardType={getKeyboardType(type)}
                onChangeText={onChange}
              />
            </View>
          </View>
        </View>
      )}
      {type !== "password" && type !== "phone" && (
        <View
          style={[
            styles.textInput,
            {
              flexDirection: "row",
              backgroundColor: bgColor,
              height: customHeight,
            },
          ]}
        >
          {icon && (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              {icon}
            </View>
          )}
          <TextInput
            style={
              icon
                ? { width: "90%", color: "#ffffff" }
                : { width: "100%", color: "#ffffff" }
            }
            placeholder={placeholder}
            placeholderTextColor="#A0A0A0"
            keyboardType={getKeyboardType(type)}
            onChangeText={onChange}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textInput: {
    borderRadius: 10,
    color: "#fff",
    paddingHorizontal: 10,
    width: "100%",
  },
  preFix: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  containerFlag: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});
