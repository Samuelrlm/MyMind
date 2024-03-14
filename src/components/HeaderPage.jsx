import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 10;

export default function HeaderPage({title, customHeaderStyle}) {
    const navigation = useNavigation();
    
    return (
        <View style={{
            ...styles.container,
            ...customHeaderStyle
        }}>
            <View style={styles.leftPart}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-thin-left" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.centerPart}>
                <Text style={{color: "#fff", fontSize: 20}}>{title}</Text>
            </View>
            <View style={styles.rigthPart} />
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
    rigthPart: {
        width: "20%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    centerPart: {
        width: "60%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});
