import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity } from "react-native";

export function Button({ variant = "primary", title, onPress }) {
  function getStyles() {
    switch (variant) {
      case "primary":
        return {
          width: "100%",
          height: 40,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        };
      case "secondary":
        return {
          width: "100%",
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
        }
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.7}
      onPress={onPress}
    >
      <LinearGradient
        //colors={["#9C3FE4", "#B14B96", "#C65647"]}
        colors={["#6b6dd8", "#841FDC", "#6B0EBD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={getStyles()}
      >
        <Text style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 20,
        }}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
