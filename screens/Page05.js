import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView } from 'react-native';

const App = () => {

  const Items = [
    {
      name: "Nike",
      trans: "4",
      price: "200"
    },
    {
      name: "Amazon",
      trans: "3",
      price: "180"
    },
    {
      name: "Subway",
      trans: "2",
      price: "250"
    },

  ]

  return (
    <SafeAreaView style={styles.SafeArea}>

      <View style={styles.topBg}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginHorizontal: 10 }}>
          <Text style={{ fontSize: 16, color: "#fff" }}>Headphone</Text>
          <Text style={{ color: "#fff" }}>icon</Text>
        </View>
      </View>

      <View style={styles.topCardDiv}>
        <View style={styles.card1}>
          <Text style={{ fontSize: 13, color: "#fff", right: "-40%", paddingVertical: 5 }}>Total View</Text>
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "600", textAlign: "center", paddingVertical: 5 }}>645,946</Text>
        </View>
        <View style={styles.card2}>
          <Text style={{ fontSize: 13, color: "#fff", right: "-40%", paddingVertical: 5 }}>Total Order</Text>
          <Text style={{ fontSize: 18, color: "#fff", fontWeight: "600", textAlign: "center", paddingVertical: 5 }}>5,946</Text>
        </View>
      </View>

      <ScrollView>

        <View style={styles.renevue}>
          <View style={{ width: 30, height: 30, backgroundColor: "fff" }}></View>
          <View>
            <Text style={{ color: "#fff" }}>Total Revenue</Text>
            <Text style={{ color: "#fff", fontSize: 20 }}>4,57,000</Text>
          </View>
        </View>

        <View style={{ marginHorizontal: 30 }}>
          <Text style={{ fontWeight: "bold" }}>Sales Chart</Text>
          <View style={{ backgroundColor: "#5004E0", width: "100%", height: 150, marginVertical: 10, borderRadius: 10 }}></View>
        </View>

        <View style={{ marginHorizontal: 30 }}>
          <Text style={{ fontWeight: "bold", marginTop: 10 }}>Most Order Items</Text>

          {Items.map((elem) => {
            return (
              <View style={styles.itemCard}>

                <View>
                  <Text style={{ fontWeight: "bold" }}>{elem.name}</Text>
                  <Text style={{ color: "#1C1939CC", fontSize: 12 }}>{elem.trans} transactions</Text>
                </View>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>₹{elem.price}</Text>
              </View>
            )
          })}

          <View style={styles.button} >
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Download PDF</Text>
          </View>

        </View>



      </ScrollView>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  topBg: {
    backgroundColor: "#130CB7",
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: "25%",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  topCardDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: -70,
    marginHorizontal: 8,
  },
  card1: {
    backgroundColor: "#C850C0",
    width: "40%",
    padding: 10,
    borderRadius: 7
  },
  card2: {
    backgroundColor: "#FF4E00",
    width: "40%",
    padding: 10,
    borderRadius: 7
  },
  renevue: {
    backgroundColor: "#00C569",
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 20,
    marginHorizontal: 30,
    borderRadius: 7,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  itemCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#D2D1D7",
    borderBottomWidth: 2,
    marginVertical: 5,
    paddingVertical: 5
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
  },
})

export default App;
