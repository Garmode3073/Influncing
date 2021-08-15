import React, { Component } from "react";
import { StyleSheet, View, Text, Image} from "react-native";
import PropTypes from 'prop-types';



class ShopPost extends React.Component{

    constructor(props) {
        super(props);
      }


    render(){
        return (
        <View style={this.props.left?{
            padding:9,
            width:160,
            height:213,
            marginLeft: 17,
            marginRight: 5,
          }:{
            padding:9,
            width:160,
            height:213,
            marginLeft: 5,
            marginRight: 17,
          }}>
          <Image
            style={{
                width: 142,
                height: 106,
                borderRadius:14
              }}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={{
            fontSize:15,
            marginTop:20,
            fontFamily: "Poppins-Medium",
          }}>
            Air Jorden
          </Text>
          <Text style={{
            fontSize:12,
            color:'#ACABB3',
            fontFamily: "Poppins-Medium",
          }}>
            Hustle Edition
          </Text>
          <View>
            <Text style={{
            fontSize:14,
            color:'#5004E0',
            fontFamily: "Poppins-Medium",
          }}>₹ 150</Text>
          </View>
          <View style={{
            justifyContent:'center',
            width:35,
            height:35,
            position: 'absolute',
            backgroundColor: '#5004E0',
            paddingHorizontal:12,
            borderRadius:10,
            marginLeft: 118,
            marginTop: 170,
          }}>
          <Image
            style={{
                width:11, 
                height: 15,
              }}
            source={require('../assets/icons/shop.png')}
          />
          </View>
          </View>
          );


        }
    }

    export default ShopPost;

    ShopPost.propTypes = {left: PropTypes.bool.isRequired,};