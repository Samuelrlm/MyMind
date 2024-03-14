import React from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";


export function TabNavigationBar({ selectedtab }) {
    const navigation = useNavigation();
    const tabs = [
        {
            id: 'home',
            name: "Home",
            icon: <Ionicons name="home-outline" size={30} color="white" />,
            selectedIcon: <Ionicons name="home" size={30} color="white" />,
            onPress: () => navigation.navigate('Home')
        },
        {
            id: 'history',
            name: "Histórico",
            icon: <MaterialCommunityIcons name="history" size={30} color="white" />,
            onPress: () => navigation.navigate('History')
        },
        {
            id: 'newgame',
            name: "New Game",
            icon: <Ionicons name="game-controller-outline" size={30} color="white" />,
            selectedIcon: <Ionicons name="game-controller" size={30} color="white" />,
            onPress: () => navigation.navigate('GameConfig')
        },
        {
            id: 'profile',
            name: "Profile",
            icon: <FontAwesome name="user-o" size={29} color="white" />,
            selectedIcon: <FontAwesome name="user" size={29} color="white" />,
            onPress: () => navigation.navigate('Profile')
        },
        {
            id: 'settings',
            name: "Settings",
            icon: <Ionicons name="settings-outline" size={30} color="white" />,
            selectedIcon: <Ionicons name="settings" size={30} color="white" />,
            onPress: () => navigation.navigate('Settings')
        }
    ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        return (
          <TouchableOpacity
            style={
              tab.id === 'newgame' ? styles.btnNewGame : styles.btn
            }
            key={tab.id}
            onPress={tab.onPress}
            activeOpacity={0.7}
          >
            {selectedtab === tab.id ? tab.selectedIcon : tab.icon}
            {selectedtab === tab.id && selectedtab !== 'newgame' && (
              <View style={styles.selectedBtn}/>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "8%",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

    flexDirection: "row",
    paddingStart: 10,
    paddingEnd: 10,
    paddingBottom: 8,
  },
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btnNewGame: {
    width: 75,
    height: 75,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#991FCD",
    borderRadius: 50,
    marginBottom: 40,
  },
  selectedBtn: {
    width: "70%",
    height: 3,
    borderRadius: 15,
    backgroundColor: "#991FCD",
    position: "absolute",
    bottom: 0,
  }
});