import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput} from "react-native";


export function InputNumber({ numbersAmount, guessList, selectedInput, setSelectedInput }) {

    const numbers = [];
    for (let i = 0; i < numbersAmount; i++) {
        numbers.push(i);
    }

    function handleSelectInput(index) {
        setSelectedInput(index);
    }

    return (
        <View style={styles.container}>
            {numbers.map((index) => (
                <View key={index}
                    onTouchStart={() => handleSelectInput(index)}
                    style={{
                        ...styles.input,
                        borderBottomWidth: selectedInput === index ? 9 : 4,
                    }}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 30,
                        fontWeight: "bold",
                    }}>{
                        guessList[index] ? guessList[index] : ""
                    }</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10,
    },
    input: {
        width: 70,
        height: 70,
        borderColor: "#242424",
        borderWidth: 4,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});