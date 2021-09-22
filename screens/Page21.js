import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TextArea } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>

        <View style={{ backgroundColor: "#622DB4", padding: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>

          <View style={styles.flex}>
            <Text style={{ color: "#fff", fontSize: 18 }}>Profile</Text>
            <Image source={require('./assets/icons/favorite.png')} />
          </View>

          <View style={{ backgroundColor: "#fff", paddingHorizontal: 8, paddingVertical: 10, borderRadius: 15, marginVertical: 15 }}>
            <View style={styles.flexstart}>
              <View style={{ width: 164, height: 164, backgroundColor: "#D8D8D8", borderRadius: 5 }}></View>

              <View style={{ marginHorizontal: 15 }}>

                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>₹1k - ₹3k</Text>
                  <Text style={{ color: "#999999", fontSize: 10 }}>Budget</Text>
                </View>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>88%</Text>
                  <Text style={{ color: "#999999", fontSize: 10 }}>Satisfaction</Text>
                </View>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>20</Text>
                  <Text style={{ color: "#999999", fontSize: 10 }}>Collabration</Text>
                </View>

              </View>
            </View>

            <View style={{ marginVertical: 10, display: "flex" }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Farhan Patel</Text>
              <Text style={{ fontSize: 12, fontWeight: 'bold', marginVertical: 5 }}>Male | Age 25 | Mumbai</Text>
              <Text style={{ fontSize: 12 }}>Fashion  Beauty  Health</Text>
              <Text style={{ color: "#474747", fontSize: 12, marginVertical: 5 }}>For the past five years or so of being an Independent Recording Artist. I have written three bios and description of my music style iced jackets. This by chance is the best advice I have ever received.</Text>
            </View>

            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", paddingBottom: 20 }}>

              <View style={{ width: "23%", height: 100, backgroundColor: "#C938AC", padding: 15, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 7 }}>Instagram</Text>
                <Text style={{ color: "white", fontSize: 8, marginVertical: 8, fontWeight: 'bold' }}>90k</Text>
              </View>

              <View style={{ width: "23%", height: 100, backgroundColor: "#297DF7", padding: 15, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 7 }}>Facebook</Text>
                <Text style={{ color: "white", fontSize: 8, marginVertical: 7, fontWeight: 'bold' }}>70k</Text>
              </View>

              <View style={{ width: "23%", height: 100, backgroundColor: "#CD0E0E", padding: 15, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 7 }}>Youtube</Text>
                <Text style={{ color: "white", fontSize: 8, marginVertical: 8, fontWeight: 'bold' }}>200k</Text>
              </View>

              <View style={{ width: "23%", height: 100, backgroundColor: "#7DC6F8", padding: 15, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ color: "white", fontSize: 7 }}>Twitter</Text>
                <Text style={{ color: "white", fontSize: 8, marginVertical: 8, fontWeight: 'bold' }}>20k</Text>
              </View>

            </View>

          </View>

        </View>
        <View style={{ marginHorizontal: 30, marginTop: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "#D8D8D8", marginRight: 15, fontWeight: "bold" }}>Photos</Text>
            <Text style={{ marginRight: 15, fontWeight: "bold" }}>Analytics</Text>
            <Text style={{ color: "#D8D8D8", marginRight: 15, fontWeight: "bold" }}>Review</Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>Followers</Text>
            <View style={{ display: "flex", flexDirection: "row", marginVertical: 10, alignItems: "center", justifyContent: "space-between" }}>
              <View style={{ width: "48%", aspectRatio: 1, borderColor: "#D8D8D8800", borderWidth: 2, borderRadius: 10 }}></View>
              <View style={{ width: "48%", aspectRatio: 1, borderColor: "#D8D8D880", borderWidth: 2, borderRadius: 10 }}></View>
            </View>
          </View>

          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontWeight: "bold", fontSize: 16, marginBottom: 10 }}>Followers Age</Text>
            <View style={{ backgroundColor: "#8A2AE2", aspectRatio: 16 / 9, borderRadius: 7 }}></View>
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
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  flexstart: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

export default App;
