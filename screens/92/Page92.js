import React from "react";
import { StyleSheet, Text, View, Platform, SafeAreaView, Image, } from "react-native";

const Page92 = (props) => {

    const { details } = props;
    return (
        <>
            {details.map((detail, index) =>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginVertical: 15, position: "relative", }} key={index}>
                    <View style={styles.card}>

                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "70%" }}>
                            <View style={styles.img} />
                            <View>
                                <Text style={{ fontSize: 10, fontWeight: "bold", color: "#434343" }}>{detail.brand}</Text>
                                <Text style={{ fontSize: 10, fontWeight: '700', color: "#222222", width: "65%" }}>{detail.name} </Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 10 }}>${detail.price}</Text>
                            </View>
                        </View>

                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", position: "absolute", bottom: 20, right: 10 }}>

                            <View style={styles.count}>
                                <Text style={{ color: "#fff", fontWeight: 'bold', textAlign: "center" }}> - </Text>
                            </View>

                            <Text style={{ fontWeight: "700" }}>{detail.qt}</Text>

                            <View style={styles.count}>
                                <Text style={{ color: "#fff", fontWeight: 'bold', textAlign: "center" }}> + </Text>
                            </View>
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
        borderBottomWidth: 2,
        borderBottomColor: "#9797974A",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingBottom: 20,
    },
    img: {
        height: 70,
        width: 70,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginRight: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    count: {
        width: 20,
        height: 20,
        backgroundColor: "#5004E0",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    }
})

export default Page92;