import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 10;

export default function NavBar() {

    return (
        <View style={styles.container}>
            <View style={styles.leftPart}>
                <View style={styles.perfilPhoto}>

                </View>
            </View>
            <View style={styles.centerPart}>
                <Image 
                    source={require("../../assets/logo.png")}
                    style={styles.imgStyle}
                />
            </View>
            <View style={styles.rightPart}>
                <Ionicons name="notifications-outline" size={24} color="#fff" />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "8%",
        paddingStart: 20,
        paddingEnd: 20,
        paddingTop: statusBarHeight,
        paddingBottom: 8,
        borderBottomColor: "#939393",
        borderBottomWidth: 0.3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    leftPart: {
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    centerPart: {
        width: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#fff',
        zIndex: -1,
    },
    rightPart: {
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 10,
    },
    perfilPhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#939393",
    },
    imgStyle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        position: "absolute",
        top: -5,
    },
});
