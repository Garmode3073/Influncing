import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, TextInput } from "react-native";

export default function Page6() {
  return (
    <SafeAreaView style={styles.body}>

      <View style={{ position: "relative", marginTop: 60, marginBottom: 30 }}>
        <View style={styles.expo}>
          <Text style={{ color: "#fff", fontWeight: "bold", paddingHorizontal: 10 }}>Explore</Text>
          <Image source={require('./assets/icons/arrow.png')} />
        </View>
      </View>

      <View style={styles.logo}>
        <Image source={require('./assets/icons/Logo.png')} />
      </View>

      <View style={styles.form}>
        <Text style={{ fontWeight: 'bold', paddingTop: 10, fontSize: 20 }}>Let's Sign You In</Text>
        <Text style={{ color: "#8E8E8E" }}>Welcome back, you've been missed!</Text>

        <TextInput
          style={styles.input}
          placeholder="Email address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        <View style={{ position: "relative", padding: 12, marginHorizontal: 5 }}>
          <View style={{ position: "absolute", top: 0, right: 0 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 12 }}>Forgot Password?</Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#8C43FE", padding: 20, borderRadius: 20 }}>
          <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>Login</Text>
        </View>

        <View>
          <Text style={{ textAlign: "center", color: "#000", fontWeight: "bold", marginVertical: 10 }}>OR</Text>
        </View>

        <View style={styles.google}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

            <Image source={require('./assets/icons/google-icon.png')} style={{ marginHorizontal: 10 }} />

            <Text style={{ textAlign: "center", color: "#000", fontWeight: "bold" }}>Log in with Google</Text>
          </View>
        </View>
      </View>

      <View style={{ position: "absolute", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginVertical: 10, bottom: 10, width: "100%" }}>
        <Text style={{ color: "#fff", marginHorizontal: 10 }}>Dont have account ?</Text>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Sign up</Text>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#8C43FE"
  },
  expo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 20,
    top: 0,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    marginBottom: 10
  },
  form: {
    backgroundColor: "#fff",
    margin: 15,
    marginHorizontal: 25,
    padding: 20,
    paddingBottom: 30,
    borderRadius: 15,
  },
  input: {
    borderColor: "#26323833",
    borderWidth: 2,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  google: {
    backgroundColor: "#fff", padding: 20, borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }
});
