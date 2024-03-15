import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { InputNumber } from "./InputNumber";

export default function AttemptsScroll({numbersAmount, guessList}) {
    return (
        <View style={styles.container}>
            <ScrollView
                style={{
                    width: "95%",
                    height: "70%",
                    backgroundColor: "#333",
                    borderRadius: 10,
                    paddingTop: 10,
                }}>
                <InputNumber numbersAmount={numbersAmount} guessList={guessList}/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

});