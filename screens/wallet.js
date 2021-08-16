import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  FlatList,
  Animated,
} from 'react-native'
import {useState} from 'react'
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";

const bodystyle = StyleSheet.create({
  header:{
    marginTop:"10%",
    marginHorizontal:"40%",
    width: "20%",
    backgroundColor: 'transparent',
    fontSize: 25,
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    height: 100,
    width: 150,
    borderRadius: 15,
    backgroundColor: 'white',

    marginLeft: 5,
    marginBottom: 5,
    borderWidth: 2,
    borderColor: 'black',
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
    paddingTop: StatusBar.currentHeight,
  },
})

const Wallet = () => {
  
    
  const [amount, setAmount] = useState([
    {name: '$100', id: '100'},
    {name: '$200', id: '200'},
    {name: '$300', id: '300'},
    {name: '$400', id: '400'},
    {name: '$500', id: '500'},
    {name: '$600', id: '600'},
  ])

  const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);
  
  return (
    <View style={bodystyle.main}>
        <View style={{height: "36.3%", width: "100%"}}>
        
        <AnimatedLinearGradient colors={["#8C43FE", "#130CB7"]} style={{flex:1}}>
        <Text style={bodystyle.header}>Wallet</Text>
        </AnimatedLinearGradient>
        
        </View>
      <Text style={{paddingBottom: 10, paddingTop: 10}}>
        Select the amount to buy
      </Text>
      <View>
        <FlatList
          numColumns={2}
          keyExtractor={item => item.id}
          data={amount}
          renderItem={({item}) => (
            <TouchableOpacity
              style={bodystyle.button}
              onPress={() => Alert.alert(`Selected ${item.id}`)}>
              <Text style={bodystyle.text}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default Wallet;