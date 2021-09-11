import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, } from "react-native";

const Page96 = (props) => {

    const { details } = props;
    return (
        <>
            {details.map((detail, index) =>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 15 }} key={index}>
                    <View style={styles.card}>

                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "70%" }}>
                            <View style={styles.img} />
                            <View>
                                <Text style={{ fontSize: 13, fontWeight: 'bold', color: "#2C3D55" }}>{detail.name} </Text>
                                <Text style={{ fontSize: 10, fontWeight: "bold" }}>ID {detail.id}</Text>
                                <Text style={{ fontSize: 10, fontWeight: 'bold' }}>1 Item</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 10, fontWeight: "bold", color: "#000" }}>{detail.time}</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "#5117AC", textAlign: "right" }}>₹{detail.price}</Text>
                        </View>

                    </View>
                    <View style={styles.odstatus}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <View style={{ width: 7, height: 7, backgroundColor: "#25CB4C", borderRadius: 50, marginRight: 7 }}></View>
                            <Text style={{ fontSize: 10, color: "#fff" }}>Delivered</Text>
                        </View>
                        <Text style={{ fontSize: 10, color: "#fff" }}>Details > </Text>
                    </View>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
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
        width: "90%",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        elevation: -3,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default Page96;