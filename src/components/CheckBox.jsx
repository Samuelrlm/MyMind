import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import check from "../../assets/icons/check.png";
import { Feather } from '@expo/vector-icons';

export default function CheckBox({ onChange, check = false }) {

    return (
        <View style={styles.container} 
            onTouchStart={() => onChange(!check)}     
        >
            {check && <View style={{
                width: "80%",
                height: "80%",
                borderRadius: 1,
                backgroundColor: "#318DDD",
                alignItems: "center",
                justifyContent: "center",
            }} >
                <Feather name="check" size={14} color="black" />
                </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#A0A0A0",
        alignItems: "center",
        justifyContent: "center",
    },
});
