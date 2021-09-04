import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, TextInput, ScrollView } from "react-native";

export default function Page10() {

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.top}>

        <View style={styles.profile}>
          <Text style={{ color: "#fff", fontSize: 18 }}>Profile</Text>
        </View>

        <View style={styles.progress}>

          <View style={{ display: "flex", alignItems: "center", marginRight: -20 }}>
            <View style={styles.circle1}>
              <Text>1</Text>
            </View>
            <Text style={{ color: "#fff", fontSize: 12, }}>Basic info</Text>
          </View>

          <View style={styles.line}></View>

          <View style={{ display: "flex", alignItems: "center", marginLeft: -25 }}>
            <View style={styles.circle2}>
              <Text>2</Text>
            </View>
            <Text style={{ color: "#fff", fontSize: 11, opacity: 0.4 }}>Social Media</Text>
          </View>

        </View>

      </View>

      <View style={styles.form} >

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Office Image</Text>
          <TextInput
            style={styles.proImg}
          > <Text style={{ fontSize: 13, color: "#5004E0", }}>Add Product Image</Text>
          </TextInput>
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Instagram</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Instagram Links"
          />
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Youtube</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter YouTube Links"
          />
        </View>

        <View style={{ marginVertical: 5 }}>
          <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Facebook</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Facebook Links"
          />
        </View>
      </View>

      <View style={{ position: "absolute", width: "100%", bottom: 0 }}>
        <View style={styles.button} >
          <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Next</Text>
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
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: 15,
  },
  profile: {
    marginTop: 40,
    marginLeft: 30,
  },
  progress: {
    paddingVertical: 20,
    marginHorizontal: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  line: {
    width: "80%",
    height: 5,
    color: "#FFFFFF",
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    opacity: 0.4,
    marginTop: -30,
  },
  circle1: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  circle2: {
    width: 25,
    height: 25,
    backgroundColor: "#fff",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },

  form: {
    margin: 10,
    marginHorizontal: 20,
  },
  proImg: {
    backgroundColor: "#E2CBFF",
    borderColor: "#5004E0",
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    borderStyle: 'dashed',
    textAlign: "center",
  },
  input: {
    borderColor: "#26323833",
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#5004E0",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    shadowColor: "#5004E0",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 19,
  },
});
