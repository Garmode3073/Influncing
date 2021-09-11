import React from "react";
import Page92 from "./Page92";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function App() {

  const details = [
    {
      brand: "APPLE",
      name: "APPLE WATCH SERIES 4 GPS 42MM SMARTWATCH",
      price: "390",
      qt: "01",
    },
    {
      brand: "SAMSUNG",
      name: "SAMSUNG GEAR SERIES 4 GPS 36MM SMARTWATCH",
      price: "550",
      qt: "01",
    },
  ]

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ margin: 20 }}>
        <Text style={{ color: "#2A2A2A", fontWeight: "bold", fontSize: 20 }}>Cart</Text>
      </View>
      <ScrollView >
        <View style={styles.main}>
          <Page92 details={details} />
        </View>
      </ScrollView>

      <View style={{ position: "absolute", bottom: 0, width: "100 %", backgroundColor: "#8C43FE", margin: 0, padding: 40, height: "50%", borderTopLeftRadius: 20, borderTopRightRadius: 20, display: "flex", justifyContent: "space-between" }}>

        <View>

          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 12 }}>Subtotal</Text>
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 12 }}>$940</Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 12 }}>Shipping</Text>
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 12 }}>$50</Text>
          </View>


          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "600", fontSize: 12 }}>Tax (15%)</Text>
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 12 }}>$80</Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 17 }}>Total</Text>
            <Text style={{ color: "#fff", fontWeight: "700", fontSize: 17 }}>$1070</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 15, position: "absolute", width: "100%", bottom: 20, left: "15%" }}>
          <Text style={{ color: "#5004E0", textAlign: "center", fontWeight: "700", }}>Proceed to pay</Text>
        </View>

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
    marginHorizontal: 20,
  }
})