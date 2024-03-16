import React from "react";
import { View, Text, StyleSheet} from "react-native";

export default function AtemptBefore({attemptsList, randomNumber}) {

    function varifyNumber(number, index) {
        if (number === randomNumber[index]) {
            const style = {
                backgroundColor: "#3aa394",
                borderColor: "#3aa394",
            };
            return style;
        }
        if (randomNumber.includes(number)) {
            const style = {
                backgroundColor: "#d3ad69",
                borderColor: "#d3ad69",
            };
            return style;
        }
        return {
            backgroundColor: "#4B4B4B",
            borderColor: "#4B4B4B",
        };

    }

    return (
        attemptsList.map((attempt, index) => (
            <View key={index} style={styles.container}>
                {attempt.map((number, index) => (
                    <View key={index} style={{
                        ...styles.input,
                        ...varifyNumber(number, index),
                    }}>
                        <Text style={styles.text}>{number}</Text>
                    </View>
                ))}
            </View>
        ))
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
    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "bold",
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
    }
});
