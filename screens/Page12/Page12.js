import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import Container from "./container";

export default function Page12() {

  const details = [
    {
      name: "Test Name 1",
      tag1: "Photography",
      tag2: "Designing",
    },
    {
      name: "Test Name 2",
      tag1: "Photography",
      tag2: "Designing",
    },
    {
      name: "Test Name 3",
      tag1: "Designing",
      tag2: "Photography",
    },
  ]

  return (
    <SafeAreaView style={styles.body}>

      <View style={styles.top}>
        <View style={{
          display: "flex", flexDirection: "row",
          alignItems: "center", marginTop: 40, marginHorizontal: 20
        }}>
          <View style={styles.welcome}>
            <View style={styles.avatar}></View>

            <View>
              <Text style={{ color: "#fff", fontSize: 10 }}>Welcome</Text>
              <Text style={{ color: "#fff", fontSize: 15 }}>Fitness Gym</Text>
            </View>
          </View>

          <View style={styles.icon}>
            <Image source={require('./assets/icons/favorite.png')} style={{ marginHorizontal: 10 }} />
            <Image source={require('./assets/icons/notifications.png')} />
          </View>

        </View>

        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginHorizontal: 15 }}>
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

      <View style={{ position: "relative" }}>
        <View style={{ backgroundColor: "#8C43FE", height: 50, width: "50%" }}></View>
      </View>

      <View style={styles.main}>

        <View style={styles.caro}>
          <View style={styles.cir1}></View>
          <View style={styles.cir2}></View>
          <View style={styles.cir3}></View>
          <View style={styles.cir4}></View>
          <View style={styles.cir5}></View>
        </View>

        {/* Row 1 */}
        <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>

          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.Title}>Instagram Creators</Text>
            <Text style={styles.ViewAll}>View All</Text>
          </View>

          <ScrollView horizontal={true} style={{ marginTop: 15, position: "relative" }}>

            <Container details={details} />

          </ScrollView>

        </View>

        {/* Row 2 */}
        {/* <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>

          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={styles.Title}>Instagram Creators</Text>
            <Text style={styles.ViewAll}>View All</Text>
          </View>

          <ScrollView horizontal={true} style={{ marginTop: 15, position: "relative" }}>

            <View style={styles.container}>
              <View style={styles.img}></View>
              <Text style={{ fontWeight: "bold", fontSize: 13, paddingVertical: 5 }}>Zain Haider</Text>

              <View style={{ marginVertical: 5 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('./assets/icons/Tag.png')} />
                  <Text style={{ fontSize: 7 }}>Photgraphy</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('./assets/icons/Tag.png')} />
                  <Text style={{ fontSize: 7 }}>Designing</Text>
                </View>
              </View>

              <View style={styles.button}>
                <Text style={{ color: "#fff" }}>View</Text>
              </View>

            </View>

            <View style={styles.container}>
              <View style={styles.img}></View>
              <Text style={{ fontWeight: "bold", fontSize: 13, paddingVertical: 5 }}>Zain Haider</Text>

              <View style={{ marginVertical: 5 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('./assets/icons/Tag.png')} />
                  <Text style={{ fontSize: 7 }}>Photgraphy</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('./assets/icons/Tag.png')} />
                  <Text style={{ fontSize: 7 }}>Designing</Text>
                </View>
              </View>

              <View style={styles.button}>
                <Text style={{ color: "#fff" }}>View</Text>
              </View>

            </View>

            <View style={styles.container}>
              <View style={styles.img}></View>
              <Text style={{ fontWeight: "bold", fontSize: 13, paddingVertical: 5 }}>Zain Haider</Text>

              <View style={{ marginVertical: 5 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('./assets/icons/Tag.png')} />
                  <Text style={{ fontSize: 7 }}>Photgraphy</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('./assets/icons/Tag.png')} />
                  <Text style={{ fontSize: 7 }}>Designing</Text>
                </View>
              </View>

              <View style={styles.button}>
                <Text style={{ color: "#fff" }}>View</Text>
              </View>

            </View>

            <View style={styles.container}>
              <View style={styles.img}></View>
              <Text style={{ fontWeight: "bold", fontSize: 13, paddingVertical: 5 }}>Zain Haider</Text>

              <View style={{ marginVertical: 5 }}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('./assets/icons/Tag.png')} />
                  <Text style={{ fontSize: 7 }}>Photgraphy</Text>
                </View>

                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Image source={require('./assets/icons/Tag.png')} />
                  <Text style={{ fontSize: 7 }}>Designing</Text>
                </View>
              </View>

              <View style={styles.button}>
                <Text style={{ color: "#fff" }}>View</Text>
              </View>

            </View>

          </ScrollView>

        </View> */}


      </View>

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
    borderBottomRightRadius: 50,
    paddingVertical: 10,
    position: "relative"
  },
  welcome: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginRight: 10,
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
  main: {
    backgroundColor: "#fff",
    height: "50%",
    top: -50,
    borderTopLeftRadius: 65,
  },
  caro: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    position: "relative",
  },
  cir1: {
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: "#C3C3EE",
  },
  cir2: {
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: "#FFB32D",
  },
  cir3: {
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: "#6E454D",
  },
  cir4: {
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: "#292123",
  },
  cir5: {
    width: 55,
    height: 55,
    borderRadius: 55,
    backgroundColor: "#ABE2D7",
  },
  Title: {
    position: "absolute",
    left: 0,
    fontWeight: 'bold',
    fontSize: 15
  },
  ViewAll: {
    position: "absolute",
    right: 0,
    fontSize: 12,
    color: "#5407E0",
    fontWeight: 'bold',
    textDecorationLine: "underline"
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
