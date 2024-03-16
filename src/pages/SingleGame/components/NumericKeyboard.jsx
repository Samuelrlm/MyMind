import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "../../../components/Button";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NumericKeyboard({ numbersAmount, guessList, setGuessList, selectedInput, setSelectedInput, setAttemptsList, attemptsList }) {
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    function handleSelectInput(number) {
        if (guessList.includes(number)) {
            return;
        }

        const newGuessList = [...guessList];
        newGuessList[selectedInput] = number;
        setGuessList(newGuessList);
        
        if (selectedInput < numbersAmount - 1) {
            setSelectedInput(selectedInput + 1);
        }
    }

    function handleDeleteInput() {
        const newGuessList = [...guessList];
        newGuessList[selectedInput] = null;
        setGuessList(newGuessList);

        //após deletar, seleciona o input anterior, porém se for o primeiro input ou o ultimo input, não faz nada
        if (selectedInput > 0) {
            setSelectedInput(selectedInput - 1);
        }
    }

    function handleConfirm() {
        if (guessList.includes(null)) {
            return;
        }

        const newAttemptsList = [...attemptsList];
        newAttemptsList.push(guessList);
        setAttemptsList(newAttemptsList);
        setGuessList(Array(numbersAmount).fill(null));
        setSelectedInput(0);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerKeyboard} >
                {numbers.map((number) => (
                    <TouchableOpacity
                        key={number}
                        style={styles.btn}
                        activeOpacity={0.7}
                        onPress={() => handleSelectInput(number)}>
                        <Text style={styles.text}>{number}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => handleDeleteInput()}>
                    <MaterialCommunityIcons name="backspace" size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.containerButton}>
                <Button
                    title="CONFIRMAR"
                    onPress={handleConfirm}
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