import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, TextInput, ScrollView } from "react-native";

export default function Page97() {

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.top}>
        <View style={styles.container}>
          <View style={styles.photo}></View>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Sarah Smith</Text>
          <Text style={{ color: "#fff", marginTop: 10, marginBottom: 20 }}>seniorsara@gmail.com</Text>
        </View>
      </View>

      <View style={styles.main}>

        <View style={{ borderBottomColor: "#00000017", borderBottomWidth: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingVertical: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#262626", fontWeight: "bold", marginRight: 10 }}>Icon</Text>
            <Text style={{ color: "#262626", fontWeight: "bold", }}>Edit Profile</Text>
          </View>
          <Text style={{ color: "#262626", fontWeight: "bold", }}>Icon</Text>
        </View>

        <View style={{ borderBottomColor: "#00000017", borderBottomWidth: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingVertical: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#262626", fontWeight: "bold", marginRight: 10 }}>Icon</Text>
            <Text style={{ color: "#262626", fontWeight: "bold", }}>Settings</Text>
          </View>
          <Text style={{ color: "#262626", fontWeight: "bold", }}>Icon</Text>
        </View>

        <View style={{ borderBottomColor: "#00000017", borderBottomWidth: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingVertical: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#262626", fontWeight: "bold", marginRight: 10 }}>Icon</Text>
            <Text style={{ color: "#262626", fontWeight: "bold", }}>FAQs</Text>
          </View>
          <Text style={{ color: "#262626", fontWeight: "bold", }}>Icon</Text>
        </View>

        <View style={{ borderBottomColor: "#00000017", borderBottomWidth: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingVertical: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#262626", fontWeight: "bold", marginRight: 10 }}>Icon</Text>
            <Text style={{ color: "#262626", fontWeight: "bold", }}>Get help</Text>
          </View>
          <Text style={{ color: "#262626", fontWeight: "bold", }}>Icon</Text>
        </View>

        <View style={{ borderBottomColor: "#00000017", borderBottomWidth: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingVertical: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#262626", fontWeight: "bold", marginRight: 10 }}>Icon</Text>
            <Text style={{ color: "#262626", fontWeight: "bold", }}>Feedback</Text>
          </View>
          <Text style={{ color: "#262626", fontWeight: "bold", }}>Icon</Text>
        </View>

        <View style={{ borderBottomColor: "#00000017", borderBottomWidth: 1, display: "flex", flexDirection: "row", justifyContent: "space-between", paddingVertical: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#262626", fontWeight: "bold", marginRight: 10 }}>Icon</Text>
            <Text style={{ color: "#262626", fontWeight: "bold", }}>Logout</Text>
          </View>
          <Text style={{ color: "#262626", fontWeight: "bold", }}>Icon</Text>
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
  top: {
    backgroundColor: "#8C43FE",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingVertical: 20
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginVertical: "50"
  },
  photo: {
    height: 70,
    width: 70,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginVertical: 10
  },
  main: {
    backgroundColor: "#fff",
    marginVertical: 30,
    marginHorizontal: "5%"
  }
})
