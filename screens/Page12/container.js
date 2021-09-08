import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image } from "react-native";

const Container = (props) => {
    console.log(props);

    const { details } = props;
    return (

        <>
            {details.map((detail, index) =>


                <View style={styles.container} key={index}>
                    <View style={styles.img}></View>
                    <Text style={{ fontWeight: "bold", fontSize: 13, paddingVertical: 5 }}>{detail.name}</Text>

                    <View style={{ marginVertical: 5 }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require('./assets/icons/Tag.png')} />
                            <Text style={{ fontSize: 7 }}>{(detail.tag1)}
                            </Text>
                        </View>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <Image source={require('./assets/icons/Tag.png')} />
                            <Text style={{ fontSize: 7 }}>{detail.tag2}</Text>
                        </View>
                    </View>

                    <View style={styles.button}>
                        <Text style={{ color: "#fff" }}>View</Text>
                    </View>

                </View>
            )}

        </>
    )
}

const styles = StyleSheet.create({
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



export default Container
