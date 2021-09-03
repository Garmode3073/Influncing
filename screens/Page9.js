import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, TextInput, ScrollView } from "react-native";

export default function Page9() {

  return (
    <SafeAreaView style={styles.body}>

      <ScrollView >

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

        <View style={styles.logo} >
          <View style={styles.image}>
            <View style={styles.add}></View>
          </View>
          <Text style={{ color: "#5004E0" }}>Logo Image</Text>
        </View>

        <View style={styles.form} >

          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Business Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Email address"
            />
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Health & Fitness"
            />
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email address"
            />
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Contact No</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Email address"
            />
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Location"
            />
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Company Established</Text>
            <TextInput
              style={styles.input}
              placeholder="Select the date"
            />
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={{ fontSize: 13, color: "#5004E0", marginLeft: 5 }}>Tell us about company</Text>
            <TextInput
              style={{
                borderColor: "#26323833",
                borderWidth: 2,
                padding: 10,
                marginVertical: 5,
                borderRadius: 10,
                height: 50,
              }}
              placeholder="Enter about company"
            />
          </View>

        </View>


        <View style={styles.button} >
          <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Next</Text>
        </View>

      </ScrollView>
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
    opacity: 0.4,
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    position: "relative",
    backgroundColor: "#fff",
    width: 100,
    height: 100,
    borderRadius: 200,
    borderWidth: 1.5,
    borderColor: "#26323833",
    marginBottom: 10,
  },
  add: {
    position: "absolute",
    backgroundColor: "#5004E0",
    width: 25,
    height: 25,
    borderRadius: 50,
    right: 5,
    top: 75,
  },
  form: {
    margin: 10,
    marginHorizontal: 20,
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
