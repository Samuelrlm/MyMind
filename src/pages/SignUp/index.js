import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import arrowLeft from "../../../assets/icons/left.png";
import { useNavigation } from "@react-navigation/native";
import { Button } from "../../components/Button";
import CheckBox from "../../components/CheckBox";

export function SignUpPage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hearder}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
          style={styles.containerIcon}>
          <Image source={arrowLeft} style={styles.arrowLeft} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerContent}>
      </View>
      <View style={styles.footer}>
        <View style={styles.containerTerms}> 
        <CheckBox />
          <TouchableOpacity>
            <Text style={{
              color: "#ffffff",
              fontSize: 11,
            }}>
            Li e concordo com os{" "} 
            <Text style={styles.textTerms}>
              termos de uso
            </Text>
            </Text>
            
          </TouchableOpacity>
        </View>
        <View style={styles.containerButton}>
          <Button title="Cadastrar" variant="secondary"/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    alignItems: "center",
  },
  hearder: {
    width: "100%",
    height: "8%",
    padding: 10,
    paddingLeft: 15,
    justifyContent: "center",
    position: "relative",
  },
  containerIcon: {
    width: 28,
    height: 28,
    borderRadius: 50,
    zIndex: 50,
  },
  arrowLeft: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  containerContent: {
    width: "95%",
    height: "74%",
    backgroundColor: "#242424",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  footer: {
    width: "95%",
    height: "18%",
  },
  textTerms: {
    color: "#2D7DFF",
    fontSize: 11,
    marginRight: 5,
  },
  containerTerms: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "center",
    gap: 7,
  },
  containerButton: {
    width: "100%",
    height: "50%",
    justifyContent: "flex-end",
  },

});
