import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput } from 'react-native';

const App = () => {

  const cards = [
    {
      name: "Summer Bonanza",
      from: "10 Aug",
      to: "20 Aug 2020",
      rev: "57K",
      units: "158"
    },
    {
      name: "Summer Bonanza",
      from: "10 Aug",
      to: "20 Aug 2020",
      rev: "57K",
      units: "158"
    },
  ]

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.top}>
        <View style={{
          display: "flex", flexDirection: "row",
          alignItems: "center", marginTop: 10, marginHorizontal: 30
        }}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Analytics</Text>

          <View style={styles.icon}>
            <Image source={require('./assets/icons/favorite.png')} style={{ marginHorizontal: 10 }} />
            <Image source={require('./assets/icons/notifications.png')} />
          </View>

        </View>

        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginHorizontal: 15, marginTop: 15 }}>
          <View style={styles.sec2}>
            <View style={{ width: "80%", marginVertical: 20 }}>
              <TextInput
                style={styles.input}
                placeholder="Type to search"
              />
            </View>

            <View style={styles.filter}>
              <Image source={require('./assets/icons/filter.png')} />
            </View>
          </View>
        </View>
      </View>

      <ScrollView >
        <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
          {cards.map((e) => {
            return (
              <View style={styles.card}>
                <View style={{ borderBottomColor: "#D2D1D7", borderBottomWidth: 2, display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 10 }}>
                  <View style={{ width: 40, height: 40, backgroundColor: "#000", borderRadius: 50, marginRight: 8 }}></View>
                  <View>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>{e.name}</Text>
                    <Text style={{ fontSize: 10, }}>From {e.from} - {e.to}</Text>
                  </View>
                </View>

                <View style={{
                  display: "flex", flexDirection
                    : "row", alignItems: "center", justifyContent: "space-evenly", marginTop: 10
                }}>
                  <View>
                    <Text style={{ fontSize: 12 }}>Total Revenue</Text>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>{e.rev}</Text>
                  </View>
                  <View>
                    <Text style={{ fontSize: 12 }}>Total Units Sold</Text>
                    <Text style={{ textAlign: "center", fontWeight: "bold" }}>{e.units}</Text>
                  </View>
                </View>

              </View>
            )
          })}
        </View>
      </ScrollView>


      <View style={styles.nav}>
        <Image source={require('./assets/icons/home.png')} />
        <Image source={require('./assets/icons/hand-shake.png')} />
        <Image source={require('./assets/icons/round_chat_black_24dp.png')} />
        <Image source={require('./assets/icons/round_shopping_cart_black_24dp.png')} />

        <View style={styles.cenlogo}>
          <Image source={require('./assets/icons/Logo.png')} style={{ width: 50, height: 50 }} />
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
  top: {
    backgroundColor: "#8C43FE",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingVertical: 10,
    position: "relative"
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 5,
  },
  sec2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
  },
  filter: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 15,
  },
  card: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#00000026",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopWidth: 1,
    borderColor: "#9797974A",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  cenlogo: {
    backgroundColor: "#5407E0",
    borderRadius: 100,
    width: 60,
    height: 60,
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bottom: 30,
    right: 150,
  },
  container: {
    borderColor: "#E8E8E8A1",
    borderWidth: 2,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    margin: 10
  },
  img: {
    height: 60,
    width: 60,
    backgroundColor: "#000",
    borderRadius: 22,
  },
  button: {
    backgroundColor: "#5004E0",
    padding: 10,
    borderRadius: 7,
    marginVertical: 5,
    paddingHorizontal: 40,
    shadowColor: "#5004E0",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 5,
  },
});

export default App;
