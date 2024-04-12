import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { PageBase } from "../../components/PageBase";
import AttemptsScroll from "./components/AttemptsScroll";
import NumericKeyboard from "./components/NumericKeyboard";

export default function SingleGame({route}) {
    const [guessList, setGuessList] = useState([]);
    const [selectedInput, setSelectedInput] = useState(0);
    const { gameData } = route.params;
    const [attemptsList, setAttemptsList] = useState([]);

    return (
        <PageBase navBar={false} tabNavigationBar={false} customHeaderStyle={{
            borderBottomWidth: 0,
        }}>
            <AttemptsScroll
                numbersAmount={gameData.numbersAmount}
                guessList={guessList}
                selectedInput={selectedInput}
                setSelectedInput={setSelectedInput}
                attemptsList={attemptsList}
                randomNumber={gameData.randomNumber}
            />
            <NumericKeyboard
                numbersAmount={gameData.numbersAmount}
                guessList={guessList} setGuessList={setGuessList}
                selectedInput={selectedInput}
                setSelectedInput={setSelectedInput}
                setAttemptsList={setAttemptsList}
                attemptsList={attemptsList}
                randomNumber={gameData.randomNumber}
            />
        </PageBase>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

});