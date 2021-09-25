import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TextArea } from 'react-native';

const App = () => {

  const details = [
    {
      name: "Android Phone",

      price: "500",
      status: "Active",
    },
    {
      name: "iPhone",
      price: "300",
      status: "Inactive",
    },
  ]

  return (
    <SafeAreaView style={styles.body}>

      <View style={{ paddingTop: 15, paddingBottom: 60, paddingHorizontal: 30, backgroundColor: "#130CB7", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, marginBottom: 10 }}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>Order</Text>
      </View>

      <ScrollView>

        <View style={styles.main}>

          <View style={{ marginBottom: 100 }}>

            {details.map((detail, index) => {

              const { name, price, status } = detail
              return (
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 15 }} key={index}>
                  <View style={styles.card}>

                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "70%" }}>
                      <View style={styles.img} />
                      <View>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', color: "#2C3D55" }}>{name} </Text>
                        <Text style={{ fontSize: 10, fontWeight: "700", color: "#34923D" }}>{status}</Text>
                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}><Text style={{ color: "#5004E0", fontSize: 15 }}>₹{price}</Text> 1 Per Item</Text>
                      </View>
                    </View>

                    <View>
                      <View style={{ backgroundColor: "#5004E0", width: 25, height: 25, borderRadius: 50, marginRight: 10 }}></View>
                    </View>

                  </View>
                  <View style={styles.odstatus}>
                    <Text style={{ fontSize: 10, color: "#fff" }}>Edit</Text>
                    <Text style={{ fontSize: 10, color: "#fff" }}>Delete </Text>
                    <Text style={{ fontSize: 10, color: "#fff" }}>Inactive</Text>
                  </View>
                </View>)
            }
            )}
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
    position: "relative",
    height: 630
  },
  button: {
    position: "absolute",
    bottom: 0,
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
    width: "95%",
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