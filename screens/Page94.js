import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, ScrollView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function Page94() {

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Payment Methods</Text>
      </View>

      <View >
        <Text style={{ color: "#7C7C7C", fontWeight: "bold", marginLeft: 10, marginBottom: 10 }}>Saved Cards</Text>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>

          <View style={styles.card1}>
            <Text style={{ color: "#fff", marginBottom: 25 }}>logo</Text>
            <Text style={{ color: "#fff" }}>Master Card</Text>
            <Text style={{ color: "#fff" }}>* * * * 8 9 5 4</Text>
          </View>

          <View style={styles.card2}>
            <Text style={{ color: "#fff", marginBottom: 25 }}>Logo</Text>
            <Text style={{ color: "#fff" }}>Visa Card</Text>
            <Text style={{ color: "#fff" }}>* * * * 8 9 5 4</Text>
          </View>

        </View>
      </View>


      <View style={styles.methods}>

        <Text style={{ fontWeight: "bold", color: "#4E4E4E" }}>Add New Payment Methods</Text>

        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginVertical: 10 }}>
          <View style={styles.paycard}>
            <Text>Debit Card</Text>
          </View>
          <View style={styles.paycard}>
            <Text>Credit Card</Text>
          </View>
          <View style={styles.paycard}>
            <Text>Net Banking</Text>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginVertical: 10 }}>
          <View style={styles.paycard}>
            <Text>Debit Card</Text>
          </View>
          <View style={styles.paycard}>
            <Text>Credit Card</Text>
          </View>
          <View style={styles.paycard}>
            <Text>Net Banking</Text>
          </View>
        </View>

        <Text style={{ color: "#8F8F8F", textAlign: "center", marginTop: 10 }}>100% Secure payment</Text>

        <View style={styles.button}>
          <Text style={{ color: "#fff", fontWeight: 'bold' }}>Proceed to pay</Text>
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
    marginHorizontal: 20
  },
  methods: {
    paddingVertical: 7,
  },
  button: {
    backgroundColor: "#5004E0",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
    alignItems: "center",
    shadowColor: "#5004E0",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
  card1: {
    position: "relative",
    backgroundColor: "#F9A000",
    padding: 20,
    aspectRatio: 1,
    borderRadius: 20,
    shadowColor: "#F9A000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.30,
    shadowRadius: 12.35,

    elevation: 19,
  },
  card2: {
    position: "relative",
    backgroundColor: "#37B4FD",
    padding: 20,
    aspectRatio: 1,
    borderRadius: 20,
    shadowColor: "#37B4FD",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.40,
    shadowRadius: 12.35,

    elevation: 19,
  },
  methods: {
    marginTop: 40,
  },
  paycard: {
    borderWidth: 1,
    borderColor: "#09090908",
    padding: 0,
    marginHorizontal: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  }
})