import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, } from "react-native";

const Page93 = (props) => {

    const { details } = props;
    return (
        <>
            {details.map((detail, index) =>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 15 }} key={index}>
                    <View style={styles.card}>

                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "70%" }}>
                            <View style={styles.img} />
                            <View>
                                <Text style={{ fontSize: 15, fontWeight: '700', color: "#2C3D55" }}>{detail.name} </Text>
                                <Text style={{ fontSize: 10, fontWeight: "bold", color: "#ACABB3" }}>{detail.info}</Text>
                                <Text style={{ fontSize: 12, fontWeight: '600' }}>Qty: {detail.qt}</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: "#000", textAlign: "right", paddingRight: 10 }}>₹{detail.price}</Text>
                        </View>
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
})

export default Page93;