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

          <Text style={{ fontWeight: "bold" }}>Store 33% Complete</Text>

          <View style={{ borderColor: "#9797974A", borderWidth: 2, borderRadius: 10, padding: 20, marginVertical: 10, position: "relative" }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", marginBottom: 20 }}>
              <View style={{ width: 50, height: 50, backgroundColor: "#5004E0", borderRadius: 50, marginRight: 20 }}></View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Create Online store</Text>
                <Text style={{ color: "#C6C6C6", fontSize: 12, marginRight: 50 }}>Congratulations on opening your new online store!</Text>
                <Text style={{ color: "#5004E0", fontWeight: "bold", fontSize: 12 }}>Visit Store</Text>
              </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", marginBottom: 20 }}>
              <View style={{ width: 50, height: 50, backgroundColor: "#E8D9FF", borderRadius: 50, marginRight: 20, display: "flex", justifyContent: "center" }}>
                <Text style={{ color: "#5004E0", textAlign: "center", fontWeight: "bold" }}>2</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold" }}>Create Online store</Text>
                <Text style={{ color: "#C6C6C6", fontSize: 12, marginRight: 50 }}>Congratulations on opening your new online store!</Text>
                <View style={{ backgroundColor: "#5004E0", width: 80, marginTop: 7, padding: 8, borderRadius: 8 }}>
                  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 8, textAlign: "center" }}>Add Product</Text>
                </View>
              </View>
            </View>

            <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", marginBottom: 20 }}>
              <View style={{ width: 50, height: 50, backgroundColor: "#fff", borderRadius: 50, marginRight: 20, display: "flex", justifyContent: "center", borderColor: "#C6C6C6", borderWidth: 1 }}>
                <Text style={{ color: "#C6C6C6", textAlign: "center", fontWeight: "bold" }}>3</Text>
              </View>
              <View>
                <Text style={{ fontWeight: "bold", color: "#C6C6C6" }}>Share link</Text>
              </View>
            </View>

            <View style={{ backgroundColor: "#5004E0", height: 48, width: 2, display: "flex", position: "absolute", left: 45, top: 70 }}></View>

            <View style={{ backgroundColor: "#C6C6C6", height: 65, width: 2, display: "flex", position: "absolute", left: 45, top: 165 }}></View>

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