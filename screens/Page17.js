import React from 'react'
import { View, Text, StyleSheet, Platform, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TextArea } from 'react-native';

const App = () => {
  const category = ["Food", "Fashion", "Beauty", "Lifestyle", "Travel"];

  const lang = ["English", "Hindi", "Marathi", "Tamil"];

  const social = [
    {
      name: "Facebook",
      posts: "2",
      videos: "2"
    },
    {
      name: "Twitter",
      posts: "6",
      videos: "4"
    },
    {
      name: "Youtube",
      posts: "2",
      videos: "8"
    },
    {
      name: "Snapchat",
      posts: "3",
      videos: "7"
    },
  ]

  return (
    <SafeAreaView style={styles.body}>

      <View style={{ paddingVertical: 15, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Campaign info</Text>
      </View>

      <ScrollView>

        <View style={styles.main}>

          <View style={{ backgroundColor: "#E2CBFF", padding: 18, borderWidth: 2, borderStyle: "dotted", borderColor: "#5004E0", borderRadius: 10 }}>
            <Text style={{ textAlign: "center", color: "#5004E0", fontWeight: "bold", fontSize: 12 }}>Add Product Image</Text>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text style={styles.inTitle}>Product or Service name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Product Name"
            />
          </View>

          <View>
            <Text style={styles.inTitle}>Category</Text>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
              {category.map((item, id) => (
                <View key={id} style={{ backgroundColor: "#E2CBFF", paddingVertical: 5, paddingHorizontal: 20, marginVertical: 10, borderRadius: 5, marginRight: 15 }}>
                  <Text style={{ color: "#6C0EE4", fontSize: 12 }}>{item}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={{ marginVertical: 20 }}>
            <Text style={styles.inTitle}>Product Description</Text>

            <TextInput
              style={{
                borderColor: "#26323833",
                borderWidth: 2,
                padding: 10,
                marginVertical: 5,
                borderRadius: 10,
                height: "auto"
              }}
              placeholder="Describe your Product"
              multiline={true}
            />
          </View>

          <View>
            <Text style={styles.inTitle}>Number of posts & videos</Text>
            <View>
              {social.map((e, id) => {
                return (
                  <View key={id} style={{ display: "flex", alignItems: "center", marginVertical: 8 }}>
                    <View style={{ marginVertical: 10, borderWidth: 2, borderColor: "#26323833", padding: 12, borderRadius: 10, width: "100%" }}>
                      <Text style={{ fontWeight: "500" }}>{e.name}</Text>
                    </View>

                    <View style={{ padding: 7, backgroundColor: "#5004E0", width: "90%", marginTop: -10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around", borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>

                      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                        <Text style={{ color: "#fff", fontSize: 10, marginHorizontal: 3 }}>Post</Text>

                        <View style={{ backgroundColor: "#fff", borderRadius: 50, height: 12, width: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                          <Text style={{ textAlign: "center" }}>-</Text>
                        </View>

                        <Text style={{ color: "#fff", fontSize: 12, marginHorizontal: 3 }}>{e.posts}</Text>


                        <View style={{ backgroundColor: "#fff", borderRadius: 50, height: 12, width: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                          <Text style={{ textAlign: "center" }}>+</Text>
                        </View>

                      </View>


                      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                        <Text style={{ color: "#fff", fontSize: 10, marginHorizontal: 3 }}>Videos</Text>

                        <View style={{ backgroundColor: "#fff", borderRadius: 50, height: 12, width: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                          <Text style={{ textAlign: "center" }}>-</Text>
                        </View>

                        <Text style={{ color: "#fff", fontSize: 12, marginHorizontal: 3 }}>{e.videos}</Text>


                        <View style={{ backgroundColor: "#fff", borderRadius: 50, height: 12, width: 12, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", }}>
                          <Text style={{ textAlign: "center" }}>+</Text>
                        </View>

                      </View>


                    </View>

                  </View>
                )
              })}
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <Text style={styles.inTitle}>Language</Text>
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
              {lang.map((item, id) => (
                <View key={id} style={{ backgroundColor: "#E2CBFF", paddingVertical: 5, paddingHorizontal: 10, marginVertical: 10, borderRadius: 5 }}>
                  <Text style={{ color: "#6C0EE4", fontSize: 12 }}>{item}</Text>
                </View>
              ))}
            </View>
          </View>



          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inTitle}>App or website link</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter website or app link"
            />
          </View>


          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inTitle}>Reference Caption</Text>
            <TextInput
              style={styles.input}
              placeholder="Any type of caption in your mind"
            />
          </View>


          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inTitle}>Tags & hashtags</Text>
            <TextInput
              style={styles.input}
              placeholder="#Enter #your #Tags"
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={styles.inTitle}>Campaign Duration</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
              <TextInput
                style={{
                  borderColor: "#26323833",
                  borderWidth: 2,
                  padding: 10,
                  marginVertical: 5,
                  borderRadius: 10,
                  width: "48%"
                }}
                placeholder="From"
              />
              <TextInput
                style={{
                  borderColor: "#26323833",
                  borderWidth: 2,
                  padding: 10,
                  marginVertical: 5,
                  borderRadius: 10,
                  width: "48%"
                }}
                placeholder="To"
              />
            </View>
          </View>

          <View style={styles.button} >
            <Text style={{ textAlign: "center", color: "#fff", fontWeight: "bold", }}>Create Campaign</Text>
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
    marginVertical: 5
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
