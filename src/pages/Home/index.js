import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setLogin } from "../../store/slices/loginSlice";

export default function Home() {
    const dispatch = useDispatch();

    function handleLogin() {
        dispatch(setLogin(false));
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <TouchableOpacity onPress={
                handleLogin
            }>
                <Text>Login</Text>
            </TouchableOpacity>
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