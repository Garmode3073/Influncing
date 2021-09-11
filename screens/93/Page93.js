import React from "react";
import Page93 from "./Page93com";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function Page93() {

  const details = [
    {
      name: "Air Jordan",
      info: "Hustle Edition",
      price: "250",
      qt: "1",
    },
    {
      name: "Air Jordan",
      info: "Hustle Edition",
      price: "250",
      qt: "1",
    },
  ]

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ marginTop: 10, margin: 15 }}>
        <Text style={{ color: "#2A2A2A", fontWeight: "700", fontSize: 20 }}>Done</Text>
      </View>
      <ScrollView>
        <View style={styles.main}>
          <Page93 details={details} />
        </View >

        <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
          <Text style={{ fontWeight: "700", color: "#263238", fontSize: 15 }}>Order Confirmation sent to</Text>
          <Text style={{ fontWeight: "500", color: "#263238", fontSize: 11 }}>testemail@gmail.com</Text>
        </View>


        <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
          <Text style={{ fontWeight: "700", color: "#263238", fontSize: 15 }}>Delivery address</Text>
          <Text style={{ fontWeight: "500", color: "#263238", fontSize: 11, width: "80%" }}>Francisco Román Alarcon 1060 W Addison St #13 Chicago, IL 60613 (123) 456-7890</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
            <Text style={{ fontWeight: "700", color: "#263238" }}>Payment Method</Text>
            <Text style={{ fontWeight: "500", color: "#263238", fontSize: 11, width: "80%" }}>ending in 8765</Text>
            <View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5, marginTop: 20 }}>
                <Text style={{ color: "#263238", fontWeight: "600", fontSize: 12 }}>Subtotal</Text>
                <Text style={{ color: "#263238", fontWeight: "700", fontSize: 12 }}>₹165</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                <Text style={{ color: "#263238", fontWeight: "600", fontSize: 12 }}>Shipping</Text>
                <Text style={{ color: "#263238", fontWeight: "700", fontSize: 12 }}>FREE</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                <Text style={{ color: "#263238", fontWeight: "600", fontSize: 12 }}>Expected Delivery</Text>
                <Text style={{ color: "#263238", fontWeight: "700", fontSize: 12 }}>Apr 20 - 28</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                <Text style={{ color: "#263238", fontWeight: "600", fontSize: 12 }}>Taxes</Text>
                <Text style={{ color: "#263238", fontWeight: "700", fontSize: 12 }}>₹11.55</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 5 }}>
                <Text style={{ color: "#000", fontWeight: "700", fontSize: 15 }}>Total</Text>
                <Text style={{ color: "#000", fontWeight: "700", fontSize: 15 }}>₹176.55</Text>
              </View>

            </View>
          </View>
        </View>

      </ScrollView>
      <View style={styles.button} >
        <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Finish Checkout</Text>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20
  },
  main: {
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: "#5004E0",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
    shadowColor: "#5004E0",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
})