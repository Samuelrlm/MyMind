import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View } from "react-native";

export function Button({ variant = "primary", title, onPress, iconRight, iconLeft, customStyles }) {

  function getStyles(type) {
    switch (variant) {
      case "primary":
        if (type === "btn") {
          return {
            width: "100%",
            height: 40,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          };
        }
        if (type === "text") {
          return {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          };
        }

        if (type === "colors") {
          return ["#6b6dd8", "#841FDC", "#6B0EBD"]
        }

        break;
      case "secondary":
        if (type === "btn") {
          return {
            width: "100%",
            minWidth: 100,
            height: 80,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          };
        }
        if (type === "text") {
          return {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          };
        }

        if (type === "colors") {
          return ["#9C3FE4", "#B14B96", "#C65647"]
        }

        break;
      case "common":
        if (type === "btn") {
          return {
            width: "100%",
            minWidth: 100,
            height: 40,
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            borderWidth: 0.5,
            borderColor: "#fff",
          };
        }

        if (type === "text") {
          return {
            color: "#fff",
            fontSize: 20,
          };
        }

        if (type === "colors") {
          return ["#FFFFFF00", "#FFFFFF00", "#FFFFFF00"]
        }

        break;
      default:
        if (type === "btn") {
          return {
            width: "100%",
            height: 40,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
          };
        }
        if (type === "text") {
          return {
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
          };
        }

        if (type === "colors") {
          return ["#6b6dd8", "#841FDC", "#6B0EBD"]
        }
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.7}
      onPress={onPress}
      disabled={!onPress}
    >
      <LinearGradient
        colors={getStyles("colors")}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={
          {
            ...getStyles("btn"),
            ...customStyles,
          }
        }
      >
        {iconLeft && (
          <View style={{
            width: "10%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: 7,
          }}>
            {iconLeft}
          </View>
        )}
        <View style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Text style={
            getStyles("text")
          }>{title}</Text>
        </View>
        {iconRight && (
          <View style={{
            width: "10%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 7,
          }}>
            {iconRight}
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}
