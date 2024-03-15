import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "../../../components/Button";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NumericKeyboard({ numbersAmount, guessList, setGuessList, selectedInput }) {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


    return (
        <View style={styles.container}>
            <View style={styles.containerKeyboard} >
                {numbers.map((number) => (
                    <TouchableOpacity
                        key={number}
                        style={styles.btn}
                        activeOpacity={0.7}
                        >
                        <Text style={styles.text}>{number}</Text>
                    </TouchableOpacity>
                ))}
                <MaterialCommunityIcons name="backspace" size={30} color="white" />
            </View>
            <View style={styles.containerButton}>
                <Button
                    title="CONFIRMAR"
                    onPress={() => console.log("confirmar")}
                    customStyles={{
                        width: "100%",
                        height: 80,
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 10,
    },
    containerKeyboard: {
        width: "100%",
        height: "70%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: 10,
    },
    btn: {
        width: 55,
        height: 55,
        borderColor: "#242424",
        borderWidth: 4,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "#fff",
        fontSize: 30,
    },
});