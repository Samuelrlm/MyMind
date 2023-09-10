import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%'
    },
    conteudo:{
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
})