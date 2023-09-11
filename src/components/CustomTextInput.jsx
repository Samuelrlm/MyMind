import React, { useState } from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function CustomTextInput({
  placeholder,
  bgColor = "#000",
  customHeight = 40,
  type = "default",
  onChange,
  iconImage,
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
        <View style={[styles.textInput, { flexDirection: "row", backgroundColor: bgColor, height: customHeight }]}>
        {iconImage && (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              source={iconImage}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
                marginRight: 10,
              }}
            />
          </View>
        )}
        <TextInput
          style={{ width: "84%" }}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          secureTextEntry={true}
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
            <Image
              source={require("../../assets/icons/eye-off-solid.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
          ) : (
            <Image
              source={require("../../assets/icons/eye-solid.png")}
              style={{
                width: 20,
                height: 20,
                resizeMode: "contain",
              }}
            />
          )}
          </TouchableOpacity>
      </View>
        
      )}
      {type === "phone" && (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View></View>
        </View>
      )}
      {type !== "password" && type !== "phone" && (
        <View style={[styles.textInput, { flexDirection: "row", backgroundColor: bgColor, height: customHeight }]}>
          {iconImage && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={iconImage}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: "contain",
                  marginRight: 10,
                }}
              />
            </View>
          )}
          <TextInput
            style={iconImage ? { width: "90%" } : { width: "100%" }}
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
});
