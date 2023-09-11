import { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import check from "../../assets/icons/check.png";

export default function CheckBox({ onChange }) {
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container} 
            onTouchEnd={() => {
                setChecked(!checked);
            }}
        >
            {checked && <View style={{
                width: "80%",
                height: "80%",
                borderRadius: 1,
                backgroundColor: "#318DDD",
            }} >
                <Image source={check} style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "contain",
                }} />
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
