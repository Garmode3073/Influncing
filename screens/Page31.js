import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TextArea, Linking } from 'react-native';

const App = () => {

  const Product = [
    {
      name: "Turquoise Chair",
      time: "Today 05:15 PM",
      price: 420,
    },
    {
      name: "Chair Turquoise",
      time: "Tomorrow 05:15 PM",
      price: 240,
    },
  ]

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.top}>
        <Text style={{ color: "#FFF", fontSize: 20 }}>Order Details</Text>
      </View>

      <View style={styles.main}>

        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomColor: "#D8D8D8", borderBottomWidth: 2, paddingVertical: 15 }}>
          <View>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#2C3D55" }}>ID #123456</Text>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#2C3D55" }} >Today 05:15 PM</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#25CB4C", marginRight: 10 }}></View>
            <Text style={{ fontSize: 12, fontWeight: "bold", color: "#2C3D55" }}>Delivered</Text>
          </View>
        </View>

        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomColor: "#D8D8D8", borderBottomWidth: 2, paddingVertical: 15 }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
            <View style={{ width: 50, aspectRatio: 1, borderRadius: 15, backgroundColor: "#000", marginRight: 10 }}></View>
            <View>
              <Text style={{ fontSize: 13, fontWeight: "bold", color: "#2C3D55" }}>Smart Watch</Text>
              <Text style={{ fontSize: 11, fontWeight: "bold" }}>1 X 15.00</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#8C43FE", marginRight: 10 }}>$15</Text>
          </View>
        </View>

        <View style={{ paddingVertical: 15, borderBottomColor: "#D8D8D8", borderBottomWidth: 2 }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 4 }}>
            <Text style={{ color: "#2C3D55" }}>Item Total</Text>
            <Text style={{ color: "#2C3D55" }}>$15</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 4 }}>
            <Text style={{ color: "#2C3D55" }}>Delivery</Text>
            <Text style={{ color: "#2C3D55" }}>$0</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 4 }}>
            <Text style={{ color: "#2C3D55", fontWeight: "bold" }}>Grand Total</Text>
            <Text style={{ color: "#2C3D55", fontWeight: "bold" }}>$15</Text>
          </View>
        </View>

        <View style={{ paddingVertical: 15 }}>
          <Text style={{ color: "#2C3D55", paddingVertical: 4 }}>Customer's Details</Text>
          <Text style={{ color: "#2C3D55", paddingVertical: 4 }}>Name:   Vikas Sharma</Text>
          <Text style={{ color: "#2C3D55", paddingVertical: 4 }}>Mobile:   +91-9977880077</Text>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", marginRight: 80, paddingVertical: 4 }}>
            <Text style={{ color: "#2C3D55" }}>Address:   </Text>
            <Text style={{ color: "#2C3D55" }}>B/29 Yadav Nagar, Powai Pipeline Rd Andheri East Mumbai-400 072</Text>
          </View>
          <Text style={{ color: "#2C3D55", paddingVertical: 4 }}>Payment:   COD</Text>
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
  main: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  top: {
    paddingTop: 20,
    paddingBottom: 70,
    paddingHorizontal: 20,
    backgroundColor: "#4E03E0",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});

export default App;