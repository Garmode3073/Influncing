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

          <Text style={styles.inTitle}>Product Images</Text>
          <View style={{ backgroundColor: "#E2CBFF", padding: 18, borderWidth: 2, borderStyle: "dotted", borderColor: "#5004E0", borderRadius: 10, marginVertical: 5 }}>
            <Text style={{ textAlign: "center", color: "#5004E0", fontWeight: "bold", fontSize: 12 }}>Add Product Images</Text>
          </View>

          <View style={{ marginVertical: 5 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

              <View style={{ width: "48%" }}>
                <Text style={styles.inTitle}>Price</Text>
                <TextInput
                  style={{
                    borderColor: "#26323833",
                    borderWidth: 2,
                    padding: 10,
                    marginVertical: 5,
                    borderRadius: 10,
                  }}
                  placeholder="Price"
                />
              </View>

              <View style={{ width: "48%" }}>
                <Text style={styles.inTitle}>Tax</Text>
                <TextInput
                  style={{
                    borderColor: "#26323833",
                    borderWidth: 2,
                    padding: 10,
                    marginVertical: 5,
                    borderRadius: 10,
                    width: "100%"
                  }}
                  placeholder="Select Tax"
                />
              </View>
            </View>
          </View>

          <View style={{ marginVertical: 5 }}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

              <View style={{ width: "48%" }}>
                <Text style={styles.inTitle}>Quantity</Text>
                <TextInput
                  style={{
                    borderColor: "#26323833",
                    borderWidth: 2,
                    padding: 10,
                    marginVertical: 5,
                    borderRadius: 10,
                  }}
                  placeholder="Quantity"
                />
              </View>

              <View style={{ width: "48%" }}>
                <Text style={styles.inTitle}>Units</Text>
                <TextInput
                  style={{
                    borderColor: "#26323833",
                    borderWidth: 2,
                    padding: 10,
                    marginVertical: 5,
                    borderRadius: 10,
                    width: "100%"
                  }}
                  placeholder="per unit"
                />
              </View>
            </View>
          </View>


          <View style={{ marginVertical: 5 }}>
            <Text style={styles.inTitle}>Product Description</Text>
            <TextInput
              style={{
                borderColor: "#26323833",
                borderWidth: 2,
                padding: 10,
                marginVertical: 5,
                borderRadius: 10,
                height: 100,
                textAlignVertical: "top"
              }}
              placeholder="Describe your product"
              multiline={true}
            />
          </View>

          <View style={{ marginVertical: 5 }}>
            <Text style={styles.inTitle}>Category</Text>
            <TextInput
              style={styles.input}
              placeholder="Choose Category"
            />
          </View>

          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <Text style={styles.inTitle}>More Option</Text>
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