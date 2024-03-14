import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { InputNumber } from "./InputNumber";

export default function AttemptsScroll({attempts, randomNumber, numbersAmount}) {


    return (
        <View style={styles.container}>
            <ScrollView
                style={{
                    width: "95%",
                    height: "100%",
                }}
                // contentContainerStyle={{
                //     backgroundColor: "#333",
                //     marginBottom: 20,
                //     display: "flex",
                //     flexDirection: "row",
                //     alignItems: "center",
                //     justifyContent: "space-around",
                //     paddingHorizontal: 10,
                //     paddingVertical: 10,                    
                // }}
            >
                <InputNumber numbersAmount={numbersAmount}/>
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