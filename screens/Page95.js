import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, ScrollView, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function Page95() {

  return (
    <SafeAreaView style={styles.body}>
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Banking Details</Text>
      </View>

      <ScrollView>
        <View style={styles.form}>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: "#5004E0", fontWeight: 'bold' }}>Beneficiary Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the name"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: "#5004E0", fontWeight: 'bold' }}>Bank Account Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter your account number"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: "#5004E0", fontWeight: 'bold' }}>Re-Enter Account Number</Text>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="Enter your account number "
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: "#5004E0", fontWeight: 'bold' }}>Bank Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter bank name"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: "#5004E0", fontWeight: 'bold' }}>Bank IFSC Code</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter IFSC code"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: "#5004E0", fontWeight: 'bold' }}>PAN Card Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter PAN number"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: "#5004E0", fontWeight: 'bold' }}>GST Number (optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter GST"
            />
          </View>

          <View style={styles.button}>
            <Text style={{ color: "#fff", fontWeight: 'bold' }}>Next</Text>
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
  form: {
    paddingVertical: 7,
    paddingHorizontal: 20
  },
  input: {
    borderColor: "#26323833",
    borderWidth: 2,
    padding: 10,
    marginVertical: 4,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#5004E0",
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
    alignItems: "center",
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