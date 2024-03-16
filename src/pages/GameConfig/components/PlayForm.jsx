import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Button } from "../../../components/Button";
import CheckBox from "../../../components/CheckBox";
import { useNavigation } from "@react-navigation/native";
import { generateRandomNumber } from "../../../helpers/generateRandomNumber";

export default function PlayForm({ selectedMode = "single" }) {
    const navigation = useNavigation();
    const [gameData, setGameData] = useState({
        mode: selectedMode,
        numbersAmount: 4,
        difficulty: 1, // 1 - easy, 2 - medium, 3 - hard
        time: 0,
        attempts: 0,
    });

    useEffect(() => {
        if (gameData.difficulty === 1) {
            setGameData({ ...gameData, attempts: 0 });
        } else if (gameData.difficulty === 2 && gameData.numbersAmount === 4) {
            setGameData({ ...gameData, attempts: 12 });
        } else if (gameData.difficulty === 2 && gameData.numbersAmount === 6) {
            setGameData({ ...gameData, attempts: 16 });
        } else if (gameData.difficulty === 2 && gameData.numbersAmount === 8) {
            setGameData({ ...gameData, attempts: 18 });
        } else if (gameData.difficulty === 3 && gameData.numbersAmount === 4) {
            setGameData({ ...gameData, attempts: 8 });
        } else if (gameData.difficulty === 3 && gameData.numbersAmount === 6) {
            setGameData({ ...gameData, attempts: 12 });
        } else if (gameData.difficulty === 3 && gameData.numbersAmount === 8) {
            setGameData({ ...gameData, attempts: 16 });
        }
    }, [gameData.difficulty, gameData.numbersAmount]);


    async function handleStartGame() {
        // Gerar a lista de números aleatórios usando a função generateRandomNumber
        const randomNumber = await generateRandomNumber(gameData.numbersAmount);

        const dataGame = {
            ...gameData,
            randomNumber,
        };        

        if (gameData.mode === "single") {
            navigation.navigate("SingleGame", { gameData: dataGame });
        }

        if (gameData.mode === "multiplayer") {
            alert("Em breve");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerOption}>
                <Text style={styles.title}>Modo de jogo</Text>
                <View style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}>
                    <Button
                        title={selectedMode === "single" ? "Um jogador" : "Dois jogadores"}
                        variant="secondary"
                        customStyles={{ height: 40, borderRadius: 5 }}
                    />
                </View>
                <View style={{
                    ...styles.containerOption,
                    marginTop: 20,
                }}>
                    <Text style={styles.title}>Dificuldade</Text>
                    <View style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }}>
                        <Button
                            title="Fácil"
                            variant={gameData.difficulty === 1 ? "secondary" : "common"}
                            customStyles={{ height: 40, borderRadius: 5, width: 110 }}
                            onPress={() => setGameData({ ...gameData, difficulty: 1 })}
                        />
                        <Button
                            title="Médio"
                            variant={gameData.difficulty === 2 ? "secondary" : "common"}
                            customStyles={{ height: 40, borderRadius: 5, width: 110 }}
                            onPress={() => setGameData({ ...gameData, difficulty: 2 })}
                        />
                        <Button
                            title="Difícil"
                            variant={gameData.difficulty === 3 ? "secondary" : "common"}
                            onPress={() => setGameData({ ...gameData, difficulty: 3 })}
                            customStyles={{ height: 40, borderRadius: 5, width: 90 }}
                        />
                    </View>
                    <View style={styles.cardInfo}>
                        <View style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}>

                            <Text style={{
                                color: "#fff",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>Quantidade de números:</Text>
                            <View style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                                marginTop: 10,
                            }}>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <CheckBox check={gameData.numbersAmount === 4} onChange={() => setGameData({ ...gameData, numbersAmount: 4 })} />
                                    <Text style={{ color: "#fff" }}> 4 Números</Text>
                                </View>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <CheckBox check={gameData.numbersAmount === 6} onChange={() => setGameData({ ...gameData, numbersAmount: 6 })} />
                                    <Text style={{ color: "#fff" }}> 6 Números</Text>
                                </View>
                                <View style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}>
                                    <CheckBox check={gameData.numbersAmount === 8} onChange={() => setGameData({ ...gameData, numbersAmount: 8 })} />
                                    <Text style={{ color: "#fff" }}> 8 Números</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            marginTop: 10,
                        }}>
                            <Text style={{
                                color: "#fff",
                                fontSize: 15,
                                fontWeight: "bold",
                            }}>Tentativas:</Text>
                            <Text style={{
                                color: "#fff",
                                fontSize: 15,
                                fontStyle: "italic",
                                marginLeft: 10,
                                marginTop: 5,
                            }}>
                                {gameData.difficulty === 1 ? "O modo Fácil não possui limite de tentativas" : `Você tem ${gameData.attempts} tentativas`}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                width: "100%",
                height: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
            }}>
                <Button
                    title={
                        gameData.mode === "single" ? "Iniciar" : "Criar sala"
                    }
                    variant="primary"
                    customStyles={{ height: 60, borderRadius: 5 }}
                    onPress={handleStartGame}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        backgroundColor: "#242424",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    containerOption: {
        width: "100%",
        height: "80%",
        display: "flex",
        flexDirection: "column",
    },
    cardInfo: {
        width: "100%",
        height: "auto",
        minHeight: 150,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#000",
        borderRadius: 10,
        marginTop: 5,

    }
});