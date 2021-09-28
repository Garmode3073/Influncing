import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TextArea, Linking } from 'react-native';

const App = () => {

  const details = [
    {
      name: "Smart Watch",
      id: "#553256",
      time: "Today 05:15 PM",
      price: "250",
    },
    {
      name: "Android Phone",
      id: "#553586",
      time: " 20 Jan 2021",
      price: "500",
    },
    {
      name: "iPhone",
      id: "#553254",
      time: "15 Dec 2020",
      price: "300",
    },
  ]
  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.top}>
        <Text style={{ color: "#FFF", fontSize: 20 }}>Order Details</Text>
      </View>

      <View style={styles.main}>
        {details.map((detail, index) =>
          <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 15 }} key={index}>
            <View style={styles.card}>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "70%" }}>
                <View style={styles.img} />
                <View>
                  <Text style={{ fontSize: 13, fontWeight: 'bold', color: "#2C3D55" }}>{detail.name} </Text>
                  <Text style={{ fontSize: 10, fontWeight: "bold" }}>ID {detail.id}</Text>
                  <Text style={{ fontSize: 10, fontWeight: 'bold' }}>1 Item</Text>
                </View>
              </View>

              <View>
                <Text style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>{detail.time}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#5117AC", textAlign: "right" }}>₹{detail.price}</Text>
              </View>

            </View>
            <View style={styles.odstatus}>
              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <View style={{ width: 7, height: 7, backgroundColor: "#25CB4C", borderRadius: 50, marginRight: 7 }}></View>
                <Text style={{ fontSize: 10, color: "#fff" }}>Delivered</Text>
              </View>
              <Text style={{ fontSize: 10, color: "#fff" }}>Details > </Text>
            </View>
          </View>
        )}
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
    paddingBottom: 50,
    paddingHorizontal: 20,
    backgroundColor: "#4E03E0",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    width: "100%"
  },
  img: {
    height: 70,
    width: 70,
    backgroundColor: "#000",
    borderRadius: 15,
    marginRight: 7,
  },
  odstatus: {
    backgroundColor: "#5004E0",
    width: "100%",
    width: "90%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: -3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default App;