import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, View, TextInput, Animated, TouchableWithoutFeedback} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";


const SignUp = ()=>{
    const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
    return (
        <TouchableWithoutFeedback onLongPress={()=>{ }}>
        <View style={bodystyle.main}>
        
        <AnimatedLinearGradient colors={["#8C43FE", "#130CB7"]} style={{flex:1, 
      paddingTop: StatusBar.currentHeight,}}>
        <View >
            <Text style={bodystyle.header}>Explore  {'>'}</Text>
        </View>
        <View style={bodystyle.signUp}>
        <Text style={bodystyle.start}>
            Getting Started
          </Text>
          <Text style={bodystyle.subtitle}>
          Create an account to continue!
          </Text>

          <View>
        <TextInput
        style={bodystyle.input}
        placeholder= "Enter Business Name"
        fontSize={12}
      />
        </View>

        <View>
        <TextInput
        style={bodystyle.input}
        placeholder= "Business Email Address"
        fontSize={12}
      />
        </View>

        <View>
        <TextInput
        style={bodystyle.input}
        placeholder= "Password"
        fontSize={12}
      />
        </View>

        <View>
        <TextInput
        style={bodystyle.input}
        placeholder= "Confirm Password"
        fontSize={12}
      />
        </View>
        </View>
        <Text style={bodystyle.footer}>Already Have an Account ? Sign In</Text>
        </AnimatedLinearGradient>
        
        </View>
        </TouchableWithoutFeedback>
    );
}

const bodystyle = StyleSheet.create({
    header:{
      marginTop:"2%",
      marginLeft:"70%",
      marginBottom:"40%",
      width: "20%",
      backgroundColor: 'transparent',
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    footer:{
        marginTop:"10%",
        marginHorizontal:"10%",
        width: "80%",
        backgroundColor: 'transparent',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: '#FFFFFF',
        textAlign: 'center',
      },
    signUp:{
        backgroundColor:'white',
        marginHorizontal:"5%",
        height:"60%",
        width:"90%",
        padding: 10,
        borderRadius:14,
    },
    start:{
        fontSize:25,
        fontWeight: "bold",
        marginTop:"3%",
        fontFamily: "Poppins-Medium",
      },
      subtitle:{
        fontSize:14,
        color:'#8E8E8E',
        marginBottom:"3%",
        fontFamily: "Poppins-Medium",
      },
      input:{
        height: 46,
        margin: 10,
        borderRadius:14,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor:"#00000008"
      },
    text: {
      fontSize: 30,
      color: 'black',
      fontFamily: 'Poppins-Medium',
      textAlign: 'center',
      padding: 10,
    },
    main: {
      flex: 1,
    },
  })

export default SignUp;