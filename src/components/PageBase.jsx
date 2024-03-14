import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import NavBar from "./NavBar";
import { TabNavigationBar } from "./TabNavigationBar";
import HeaderPage from "./HeaderPage";

export function PageBase({
  children,
  navBar = true,
  tabNavigationBar = true,
  selectedtab,
  headerPage = false,
  headerTitle = "",
  customHeaderStyle
}) {
  function getStyleMain() {
    if ((navBar || headerPage) && tabNavigationBar) {
      return "84%";
    }

    if (((navBar || headerPage) && !tabNavigationBar) || ((!navBar || !headerPage) && tabNavigationBar)) {
      return "92%";
    }

    return "100%";
  }

  return (
    <SafeAreaView style={styles.container}>
      {navBar && (
        <NavBar />
      )}
      {headerPage && (
        <HeaderPage title={headerTitle} customHeaderStyle={customHeaderStyle} />
      )}
      <View style={{
        ...styles.main,
        height: getStyleMain()
      }}>
        {children}
      </View>
      {tabNavigationBar && (
        <TabNavigationBar selectedtab={selectedtab} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "column",
  },
  main: {
    width: "100%",
    paddingTop: 40,
    paddingBottom: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
});

