import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { PageBase } from "../../components/PageBase";
import { generateRandomNumber } from "../../helpers/generateRandomNumber";
import AttemptsScroll from "./components/AttemptsScroll";
import NumericKeyboard from "./components/NumericKeyboard";

export default function SingleGame({route}) {
    const [guessList, setGuessList] = useState([]);
    const [selectedInput, setSelectedInput] = useState(0);
    const { gameData } = route.params;
    const randomNumber = generateRandomNumber(gameData.numbersAmount);

    return (
        <PageBase navBar={false} tabNavigationBar={false} customHeaderStyle={{
            borderBottomWidth: 0,
        }}>
            <AttemptsScroll numbersAmount={gameData.numbersAmount} guessList={guessList}/>
            <NumericKeyboard numbersAmount={gameData.numbersAmount} guessList={guessList} setGuessList={setGuessList}/>
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