import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView } from "react-native";

export default function Page67(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ top: 70, left: 50, fontSize: 18, color: "#fff" }}>My Stats</Text>
      <View style={styles.stats}>
        <View style={styles.stText}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>70,000</Text>
          <Text style={{ fontSize: 11 }}>Total Earning</Text>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>16</Text>
          <Text style={{ fontSize: 11 }}>Total Collaboration</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={{ fontWeight: "bold" }}>
          Profile Effectiveness
        </Text>
        <Text style={{ fontSize: 12, paddingTop: 5 }}>As compare to your Peers in Fashion Industry</Text>
        <View style={styles.prog}>
          <View>
            <Text style={{ paddingTop: 5, fontWeight: "bold" }}>You were Viewed</Text>
            <View style={{ display: "flex", flexDirection: "row", paddingTop: 3 }}>
              <Text>Less Often</Text>
              <Text style={{ right: -120 }}>More Often</Text>
              <View style={styles.pbar} >
                <View style={styles.pbarfill}></View>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={{ paddingTop: 5, fontWeight: "bold" }}>You were requested</Text>
            <View style={{ display: "flex", flexDirection: "row", paddingTop: 3 }}>
              <Text>Less Often</Text>
              <Text style={{ right: -120 }}>More Often</Text>
              <View style={styles.pbar} >
                <View style={styles.pbarfill}></View>
              </View>
            </View>
          </View>

          <View style={{ paddingTop: 20 }}>
            <Text style={{ paddingTop: 5, fontWeight: "bold" }}>You were hired</Text>
            <View style={{ display: "flex", flexDirection: "row", paddingTop: 3 }}>
              <Text>Less Often</Text>
              <Text style={{ right: -120 }}>More Often</Text>
              <View style={styles.pbar} >
                <View style={styles.pbarfill}></View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ paddingTop: 150, left: 35, fontSize: 5 }}>
        <Text style={{ fontSize: 11, fontWeight: "bold" }}>Your profile was discovered 93 times last week</Text>
        <View style={styles.graph}>
        </View>
      </View>

      <View style={styles.navi}>
      </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#130CB7",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  stats: {
    width: 300,
    height: 150,
    backgroundColor: "#fff",
    top: 85,
    left: 30,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  info: {
    marginLeft: 35,
    top: 110,
  },
  stText: {
    left: 170,
    top: 25,
  },
  prog: {
    top: 10,
  },
  pbar: {
    width: 280,
    height: 10,
    top: 27,
    right: 160,
    borderRadius: 10,
    backgroundColor: "#cccccc",
  },
  pbarfill: {
    width: 180,
    height: 10,
    backgroundColor: "blue",
    borderRadius: 10,
  },
  graph: {
    width: 280,
    height: 150,
    backgroundColor: "#944dff",
    top: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  navi: {
    height: 150,
    bottom: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
  }
});
