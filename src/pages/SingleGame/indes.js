import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { PageBase } from "../../components/PageBase";
import { generateRandomNumber } from "../../helpers/generateRandomNumber";
import AttemptsScroll from "./components/AttemptsScroll";

export default function SingleGame({route}) {
    const { gameData } = route.params;
    const randomNumber = generateRandomNumber(gameData.numbersAmount);

    return (
        <PageBase navBar={false} tabNavigationBar={false} headerPage={true} customHeaderStyle={{
            borderBottomWidth: 0,
        }}>
            <AttemptsScroll attempts={gameData.attempts} randomNumber={randomNumber} numbersAmount={gameData.numbersAmount}/>
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