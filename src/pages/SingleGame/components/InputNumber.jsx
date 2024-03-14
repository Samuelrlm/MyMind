import React from "react";
import { View, StyleSheet, TextInput } from "react-native";


export function InputNumber({ numbersAmount }) {
    const numbers = [];
    for (let i = 0; i < numbersAmount; i++) {
        numbers.push(i);
    }

    return (
        <View style={styles.container}>
            {numbers.map((number, index) => (
                <TextInput
                    key={index}
                    style={{
                        width: 30,
                        height: 30,
                        borderColor: "gray",
                        borderWidth: 1,
                        textAlign: "center",
                    }}
                    keyboardType="number-pad"
                    maxLength={1}
                />
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
});