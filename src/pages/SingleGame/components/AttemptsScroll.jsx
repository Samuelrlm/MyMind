import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { InputNumber } from "./InputNumber";
import AtemptBefore from "./AttemptBefore";

export default function AttemptsScroll({numbersAmount, guessList, selectedInput, setSelectedInput, attemptsList, randomNumber}) {
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
                <AtemptBefore attemptsList={attemptsList} randomNumber={randomNumber} numbersAmount={numbersAmount}/>
                <InputNumber numbersAmount={numbersAmount} guessList={guessList} selectedInput ={selectedInput} setSelectedInput={setSelectedInput}/>
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