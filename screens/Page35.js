import { backgroundColor } from '@shopify/restyle';
import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TextArea, Linking } from 'react-native';

const App = () => {

  const filter = ["Social Media", "Gender", "Age", "Budget",
    "Location", "Category", "Languages"]

  const social = ["Instagram", "Youtube", "Facebook", "Snapchat", "Twitter", "Whatsapp"]

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.body}>

        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Filters</Text>

        <View style={{ marginVertical: 10 }}>
          <ScrollView horizontal={true}>
            {filter.map((e, id) => {
              return (
                <View key={id} style={{ paddingHorizontal: 12, backgroundColor: "#fff", borderColor: "#D8D8D8", borderWidth: 2, height: "auto", marginRight: 10, paddingVertical: 5, borderRadius: 10 }}>
                  <Text style={{ color: "#5004E0", fontWeight: "bold" }}>{e}</Text>
                </View>
              )
            })}
          </ScrollView>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Social Platform</Text>

          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap", width: "100%", margin: 0, padding: 0 }}>
            {social.map((e, id) => {
              return (
                <View key={id} style={{ width: "45%", backgroundColor: "#fff", margin: 7, padding: 5, borderRadius: 8, borderColor: "#D8D8D8", borderWidth: 2 }}>
                  <Text style={{ color: "#000", fontSize: 13, fontWeight: "bold", textAlign: "center" }}>{e}</Text>
                </View>
              )
            })}
          </View>
        </View>

        <View style={styles.button} >
          <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Accept</Text>
        </View>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
    opacity: 0.8,
    position: "relative"
  },
  body: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "50%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  button: {
    backgroundColor: "#5004E0",
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
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

export default App;