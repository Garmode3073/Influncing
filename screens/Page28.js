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
        <Text style={{ color: "#FFF", fontSize: 20 }}>Order</Text>
      </View>

      <View style={{
        padding: 15,
        shadowColor: "#000",
        borderRadius: 7,
        borderWidth: 3,
        borderColor: "#70707033",
        marginHorizontal: 30,
        marginTop: -50,
        backgroundColor: "#fff",

      }}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>Share Link</Text>
        <Text style={{ fontSize: 11 }}>Your customer can visit your online store & place order from this link</Text>
        <Text style={{ color: '#4E03E0', fontSize: 12 }}
          onPress={() => Linking.openURL('https://xdfile.com/free-ecommerce')}>
          https://xdfile.com/free-ecommerce
        </Text>
      </View>

      <ScrollView>
        <View style={styles.main}>

          <View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Overview</Text>
              <Text style={{ fontWeight: "bold", fontSize: 10 }}>Last week</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ width: "47%", backgroundColor: "#FF7676", padding: 25, borderRadius: 12 }}>
                <Text style={{ color: "#fff" }}>Orders</Text>
              </View>
              <View style={{ width: "47%", backgroundColor: "#2FC145", padding: 25, borderRadius: 12 }}>
                <Text style={{ color: "#fff" }}>Revenue</Text>
              </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
              <View style={{ width: "47%", backgroundColor: "#77A5F8", padding: 25, borderRadius: 12 }}>
                <Text style={{ color: "#fff" }}>Store View</Text>
              </View>
              <View style={{ width: "47%", backgroundColor: "#505862", padding: 20, paddingVertical: 25, borderRadius: 12 }}>
                <Text style={{ color: "#fff" }}>Product View</Text>
              </View>
            </View>
          </View>

          <View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10 }}>
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>Orders</Text>
              <Text style={{ fontWeight: "bold", fontSize: 10 }}>View All {'>'}</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ backgroundColor: "#5407E0", paddingVertical: 7, paddingHorizontal: 15, borderRadius: 8, marginRight: 10 }}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 11 }}>All</Text>
              </View>
              <View style={{ backgroundColor: "#fff", paddingVertical: 5, paddingHorizontal: 15, borderRadius: 8, marginRight: 10, borderWidth: 2, borderColor: "#70707033" }}>
                <Text style={{ color: "#5407E0", fontWeight: "bold", fontSize: 11 }}>Accepted</Text>
              </View>
              <View style={{ backgroundColor: "#fff", paddingVertical: 5, paddingHorizontal: 15, borderRadius: 8, marginRight: 10, borderWidth: 2, borderColor: "#70707033" }}>
                <Text style={{ color: "#5407E0", fontWeight: "bold", fontSize: 11 }}>Pending</Text>
              </View>
            </View>

            <View style={{ marginVertical: 10 }}>

              {Product.map((e, index) => {
                const { name, time, price } = e;
                return (
                  <View key={index} style={{ borderColor: "#70707033", borderWidth: 2, borderRadius: 8, padding: 10, display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 10 }}>
                    <View style={{ width: "35%", aspectRatio: 1, backgroundColor: "#70707033", marginRight: 10 }}></View>
                    <View>
                      <Text style={{ fontWeight: "bold", fontSize: 15 }}>{name}</Text>
                      <Text style={{ fontWeight: "bold", fontSize: 10, color: "#64646457" }}>{time}</Text>
                      <Text style={{ fontWeight: "bold", fontSize: 15 }}>${price}</Text>
                      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                        <View style={{ backgroundColor: "#5407E0", paddingVertical: 7, paddingHorizontal: 18, borderRadius: 8, marginRight: 10 }}>
                          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 9 }}>Accept</Text>
                        </View>
                        <View style={{ backgroundColor: "#E8D9FF", paddingVertical: 7, paddingHorizontal: 18, borderRadius: 8, marginRight: 10 }}>
                          <Text style={{ color: "#5117AC", fontWeight: "bold", fontSize: 9 }}>Decline</Text>
                        </View>
                      </View>
                    </View>

                  </View>
                )
              })}

            </View>

          </View>

          <View style={styles.button} >
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Add New Product</Text>
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
  },
  main: {
    marginHorizontal: 30,
    marginVertical: 5,
  },
  button: {
    width: "100%",
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
  top: {
    paddingTop: 20,
    paddingBottom: 70,
    paddingHorizontal: 20,
    backgroundColor: "#4E03E0",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  }
});

export default App;