import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function CustomTextInput({ placeholder, bgColor = "#000" }) {
  return (
    <TextInput
    style={[styles.textInput, { backgroundColor: bgColor }]}
      placeholder={placeholder}
      placeholderTextColor={"#7D7D7D"}
    />
  );
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderRadius: 5,
        color: "#fff",
        paddingHorizontal: 10,
        width: "100%",
    }
});