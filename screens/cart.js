import React from 'react';
import {StyleSheet, Image, View, Text, Dimensions} from 'react-native';
import { CartContainer, CartItem } from '../Components';
import Box from '../Components/box';
import {palette, carttheme} from '../theme';
import { ThemeProvider } from '@shopify/restyle';
import CartItemLine from '../Components/cartitemline';


const CartPage = () => {
    return(
        <ThemeProvider theme={carttheme}>
            <Box height="45.854%" backgroundColor='mainBackground'>
                <Box flexDirection="row" style={styles.topRow}>
                        <Image
                        style={styles.backIcon}
                        source={require('../assets/icons/back.png')}
                        />
                        <Text style={styles.pageTitle}>
                            Cart
                        </Text>
                        <Image
                        style={styles.cartIcon}
                        source={require('../assets/icons/cart.png')}
                        />
                        <Text style={styles.orders}>
                            2
                        </Text>
                </Box>
                <Box style={styles.cartItems}>
                    <CartItem/>
                    <CartItemLine/>
                    <CartItem/>
                    <CartItemLine/>
                </Box>
            </Box>
            <Box height="54.146%" backgroundColor='mainBackground'>
                <CartContainer/>
                <Box flexDirection='row' style={{marginTop:"23.39%"}}>
                    <Text style={styles.bill}>Sub total</Text>
                    <Box flex={1}></Box>
                    <Text style={styles.bill}>$940</Text>
                </Box>
                <Box flexDirection='row'>
                    <Text style={styles.bill}>Shipping charges</Text>
                    <Box flex={1}></Box>
                    <Text style={styles.bill}>$50</Text>
                </Box>
                <Box flexDirection='row'>
                    <Text style={styles.bill}>Tax (15%)</Text>
                    <Box flex={1}></Box>
                    <Text style={styles.bill}>$80</Text>
                </Box>
                <Box flexDirection='row'>
                    <Text style={styles.total}>Total</Text>
                    <Box flex={1}></Box>
                    <Text style={styles.total}>$1070</Text>
                </Box>
                <Box flex={1}></Box>
                <Box style={styles.button}>
                    <Text style={styles.buttonText}>Procced to pay</Text>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

var {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    topRow: {
        marginTop:"9.02%",
        marginBottom: "6.1929%",
        width: '100%',
        height: "8%",
    },
    backIcon: {
        marginLeft:"4.8%",
        marginVertical: "1.739%",
        width:"1.87%",
        height:"56.522%",
    },
    pageTitle: {
        justifyContent:'center',
        fontSize:16,
        marginTop:"-1%",
        paddingVertical: "1.739%",
        marginLeft:"4.53%",
        color: palette.blackFont,
    },
    cartIcon:{
        marginLeft:"68%",
        marginVertical:"0.5%",
        opacity: 0.5
    },
    orders: {
        position: 'absolute',
        width: 16,
        height: 16,
        fontSize:10,
        marginLeft:"91.73%",
        marginRight:"4%",
        marginTop: -4,
        backgroundColor: palette.blue,
        borderRadius:8,
        paddingHorizontal:5,
        paddingVertical:0.5,
        color: 'white'
    },
    cartItems: {
        marginHorizontal:"4.8%", 
        height:"73.813%", 
        width:"90.4%",
    },
    bill:{
        marginHorizontal:30,
        marginVertical:7,
        fontFamily:'Poppins-Medium',
        fontSize:14,
        color: palette.white,
    },
    total:{
        marginHorizontal:30,
        marginVertical:13,
        fontFamily:'Poppins-SemiBold',
        fontSize:18,
        color: palette.white,
    },
    button:{
        width:"80%",
        height:"13.57%",
        backgroundColor: palette.white,
        borderColor: '#9797974A',
        borderWidth:1,
        borderRadius:10,
        shadowColor: "#0000003D",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 10,
        marginHorizontal:"10%",
        marginBottom: "6.785%"
    },
    buttonText:{
        height: "50%",
        color: palette.blue,
        fontSize: 17,
        textAlign:'center',
        alignContent:'center',
        fontFamily: 'Poppins-SemiBold',
        marginHorizontal:"25%",
        marginVertical:"4%",
    },
});

export default CartPage;