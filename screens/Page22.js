import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TextArea } from 'react-native';

const App = () => {

  const review = [
    {
      name: "Marvel Music Production",
      satisfaction: "90",
      message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quam ea, dignissimos hic laudantium delectus reprehenderit itaque doloribus"
    },
    {
      name: "Music Production",
      satisfaction: "70",
      message: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quam ea, dignissimos hic laudantium delectus reprehenderit itaque doloribus"
    },
  ]

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
            <Text style={{ color: "#D8D8D8", marginRight: 15, fontWeight: "bold" }}>Analytics</Text>
            <Text style={{ color: "#000", marginRight: 15, fontWeight: "bold" }}>Review</Text>
          </View>

          <View style={{ marginVertical: 10 }}>
            {review.map((e) => {
              const { name, satisfaction, message } = e;
              return (
                <View style={{ marginVertical: 10, borderWidth: 2, borderColor: "#D8D8D880", borderRadius: 5, padding: 10, }}>
                  <Text style={{ fontWeight: "bold", fontSize: 15 }}>{name}</Text>
                  <Text style={{ fontWeight: "bold", fontSize: 10, color: "#474747" }}>{satisfaction}% Satisfaction</Text>
                  <Text style={{ color: "#474747", fontSize: 12, marginVertical: 5 }}>{message} </Text>
                </View>
              )
            })}
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
