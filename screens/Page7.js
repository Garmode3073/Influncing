import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, TextInput } from "react-native";

export default function Page7() {
  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.container}>
        <Text style={styles.mainText}>Update your password</Text>
        <Text style={{ color: "#565C66", paddingVertical: 5, fontWeight: "bold" }}>Please enter your new password</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
        />

        <View style={styles.button}>
          <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Login</Text>
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
    marginTop: "40%",
  },
  mainText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#5004E0"
  },
  input: {
    borderColor: "#26323833",
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  form: {
    marginVertical: "15%",
    marginHorizontal: 15,
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
