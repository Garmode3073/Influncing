import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, TextInput } from "react-native";

export default function Page8() {
  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.container}>

        <View style={styles.avatar} >
          <View style={styles.circle}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg',
              }}
            />
            <View style={styles.verified}></View>
          </View>
        </View>

        <View style={styles.main}>
          <Text style={{ fontSize: 25, color: "#000", fontWeight: "bold", color: "#5004E0", paddingVertical: 5 }}>Hello Farhan!</Text>
          <Text style={{ color: "#565C66", fontWeight: "bold" }}>Your password has been reset</Text>
        </View>

        <View style={styles.button} >
          <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Get Started</Text>
        </View>

      </View>

    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#FAFAFA",
    marginHorizontal: 20,
  },
  container: {
    marginHorizontal: 15,
  },
  avatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "60%"
  },
  circle: {
    position: "relative",
    backgroundColor: "#fff",
    width: 150,
    height: 150,
    borderRadius: 200,
    padding: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  verified: {
    position: "absolute",
    backgroundColor: "#00C448",
    width: 40,
    height: 40,
    borderRadius: 100,
    right: 0,
    top: 95,
  },
  main: {
    marginTop: "10%",
    alignItems: "center"
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
  }
},
);
