import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import { palette } from '../theme';
import Box from './box';

const CartItem =() =>{
    return(
        <Box height="36.63%" width="100%" flexDirection='row' style={{marginBottom: "6.489%"}}>
            <Box backgroundColor="mainBackground" height="100%" width="29.498%" borderRadius={4} style={styles.imgContainer}>
            <Image
            style={styles.img}
            source={require('../assets/images/watch.png')}
            />
            </Box>
            <Box width="65.192%">
                <Image
                style={styles.closeIcon}
                source={require('../assets/icons/close.png')}
                />
                <Text style={styles.orders}>
                    +
                </Text>
                <Text style={styles.orders3}>
                    01
                </Text>
                <Text style={styles.orders2}>
                    -
                </Text>
                <Text style={{marginTop:"0.05%", fontFamily:'Poppins-Medium', fontSize:10, color: palette.greydark}}>
                    APPLE
                </Text>
                <Text style={{marginBottom:"0.15%", fontFamily:'Poppins-SemiBold', fontSize:12, color: palette.blackFont}}>
                    Apple Watch Series 4 GPS 42mm Smartwatch
                </Text>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, color: palette.blackFont}}>
                $550
                </Text>
            </Box>
        </Box>
    );
}

const styles = StyleSheet.create({
    imgContainer: {shadowColor: palette.black,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        elevation: 18,
        marginRight: "5.31%"
    },
    img:{
        width: "72%",
        height: "72%",
        margin: "14%"
    },
    closeIcon:{
        position: 'absolute',
        width: "3.62%",
        height: "13%",
        marginLeft:"96.83%",
        marginTop: "1%"
    },
    orders: {
        position: 'absolute',
        width: 22,
        height: 22,
        fontSize:14,
        paddingVertical: 0.03,
        marginLeft: "56.79%",
        marginRight: "32.25%",
        marginTop: "26%",
        backgroundColor: palette.blue,
        borderRadius:11,
        textAlign: 'center',
        color: 'white'
    },
    orders2: {
        position: 'absolute',
        width: 22,
        height: 22,
        fontSize:14,
        paddingBottom: 0.009,
        marginLeft: "87.11%",
        marginRight: "2.71%",
        marginTop: "26%",
        backgroundColor: palette.blue,
        borderRadius:11,
        textAlign: 'center',
        color: 'white'
    },
    orders3: {
        position: 'absolute',
        fontSize:14,
        fontFamily: 'Poppins-SemiBold',
        paddingBottom: 0.009,
        marginLeft: "65.16%",
        marginTop: "26%",
        textAlign: 'center',
    },
});

export default CartItem;