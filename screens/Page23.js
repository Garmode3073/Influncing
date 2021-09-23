import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TextArea } from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={styles.body}>

      <View style={{ paddingTop: 15, paddingBottom: 60, paddingHorizontal: 30, backgroundColor: "#8C43FE", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginBottom: 10 }}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Store</Text>
      </View>

      <ScrollView>

        <View style={styles.main}>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.inTitle}>Which color best suits your brand</Text>
            <View style={{ display: "flex", flexDirection: "row", marginVertical: 8, alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ width: 25, height: 25, backgroundColor: "#2F2E41", borderRadius: 50, }}></View>
              <View style={{ width: 25, height: 25, backgroundColor: "#E61800", borderRadius: 50, }}></View>
              <View style={{ width: 25, height: 25, backgroundColor: "#E67100", borderRadius: 50, }}></View>
              <View style={{ width: 25, height: 25, backgroundColor: "#E6C400", borderRadius: 50, }}></View>
              <View style={{ width: 25, height: 25, backgroundColor: "#70B200", borderRadius: 50, }}></View>
              <View style={{ width: 25, height: 25, backgroundColor: "#00B2AD", borderRadius: 50, }}></View>
              <View style={{ width: 25, height: 25, backgroundColor: "#0071B2", borderRadius: 50, }}></View>
            </View>
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.inTitle}>Business Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
            />
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.inTitle}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter E-mail"
            />
          </View>

          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <Text style={styles.inTitle}>Phone Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter Number"
            />
          </View>

          <Text style={styles.inTitle}>Business Logo</Text>
          <View style={{ backgroundColor: "#E2CBFF", padding: 18, borderWidth: 2, borderStyle: "dotted", borderColor: "#5004E0", borderRadius: 10, marginVertical: 5 }}>
            <Text style={{ textAlign: "center", color: "#5004E0", fontWeight: "bold", fontSize: 12 }}>Add Logo</Text>
          </View>

          <View style={styles.button} >
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Add Product</Text>
          </View>

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
    position: "relative",
  },
  main: {
    marginHorizontal: 30,
    marginVertical: 5,
  },
  input: {
    borderColor: "#26323833",
    borderWidth: 2,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  inTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#5004E0"
  },
  button: {
    marginTop: 90,
    width: "100%",
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
});

export default App;