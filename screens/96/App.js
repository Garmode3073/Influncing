import React from "react";
import Page96 from "./Page96";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function App() {

  const details = [
    {
      name: "Smart Watch",
      id: "#553256",
      time: "Today 05:15 PM",
      price: "250",
    },
    {
      name: "Android Phone",
      id: "#553586",
      time: " 20 Jan 2021",
      price: "500",
    },
    {
      name: "iPhone",
      id: "#553254",
      time: "15 Dec 2020",
      price: "300",
    },
    {
      name: "Smart Watch",
      id: "#553886",
      time: "Today 05:15 PM",
      price: "250",
    },
  ]

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ margin: 20 }}>
        <Text style={{ color: "#2A2A2A", fontWeight: "bold", fontSize: 20 }}>Order History</Text>
      </View>
      <View style={styles.main}>
        <Page96 details={details} />
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#FFFFFF",
  },
  main: {
    marginHorizontal: 20
  },
})