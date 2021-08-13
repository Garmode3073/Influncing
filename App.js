import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, View, TextInput} from 'react-native';
import { useFonts } from 'expo-font';

const App = () =>{
  let [fontsLoaded] = useFonts({
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.otf'),
  });

  if (!fontsLoaded) {
    return (<SafeAreaView style={styles.container}>
      <Image
        style={styles.loading}
        source={require('./assets/splash.png')}
      />
    </SafeAreaView>);
  } else {
    
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled" showsHorizontalScrollIndicator={false}
      >
        <View style={styles.row1}>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <View>
        
      <Image
        style={styles.shopping}
        source={require('./assets/cart.png')}
      />
      <Text style={styles.orders}>
          2
        </Text>
      </View>
        </View>
        <View>
          <Text style={styles.shopname}>
            Farhan Sports Shop
          </Text>
        </View>
        <View>
          <Text style={styles.shoptime}>
          Store Time : 10:00 am - 11:00 PM
          </Text>
        </View>
        <View>
          <Text style={styles.shopdetails}>
          New Marine Lines, Churchgate, Mumbai- 400020
          </Text>
        </View>
        <View>
        <View style={styles.tunecon}>
      <Image
        style={styles.tuneicon}
        source={require('./assets/tune.png')}
      />
      </View>
        <Image
        style={styles.searchicon}
        source={require('./assets/search.png')}
      />
        <TextInput
        style={styles.input}
        placeholder= "Search anything…"
        fontSize={12}
      />
      
        </View>
        <View style={styles.row2}>
        <Image
        style={styles.gridlist}
        source={require('./assets/list.png')}
      />
      <Image
        style={styles.gridlist}
        source={require('./assets/grid.png')}
      />
        </View>
        <View>
          <ScrollView horizontal={true} style={styles.accessories} showsHorizontalScrollIndicator={false}>
            
              <View style={styles.selectedcon}>
                <Text style={styles.selectedcat}>
                  Shoes
                </Text>
              </View>
            
              <View style={styles.unselectedcon}>
                <Text style={styles.cat}>
                  Clothes
                </Text>
              </View>
            
              <View style={styles.unselectedcon}>
                <Text style={styles.cat}>
                  Glossery
                </Text>
              </View>
            
              <View style={styles.unselectedcon}>
                <Text style={styles.cat}>
                  Accessories
                </Text>
              </View>
          </ScrollView>
        </View>
        <View style={{flexDirection: 'row',}}>

          <View  style={styles.productleft}>
          <Image
            style={styles.itemimg}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={styles.proname}>
            Air Jorden
          </Text>
          <Text style={styles.prdetail}>
            Hustle Edition
          </Text>
          <View>
            <Text style={styles.proPrice}>₹ 150</Text>
          </View>
          <View style={styles.shopCont}>
          <Image
            style={styles.shopIcon}
            source={require('./assets/shop.png')}
          />
          </View>
          </View>

          <View  style={styles.productright}>
          <Image
            style={styles.itemimg}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={styles.proname}>
            Air Jorden
          </Text>
          <Text style={styles.prdetail}>
            Hustle Edition
          </Text>
          <View>
            <Text style={styles.proPrice}>₹ 150</Text>
          </View>
          <View style={styles.shopCont}>
          <Image
            style={styles.shopIcon}
            source={require('./assets/shop.png')}
          />
          </View>
          </View>
        </View>
        <View style={{flexDirection: 'row',}}>

          <View  style={styles.productleft}>
          <Image
            style={styles.itemimg}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={styles.proname}>
            Air Jorden
          </Text>
          <Text style={styles.prdetail}>
            Hustle Edition
          </Text>
          <View>
            <Text style={styles.proPrice}>₹ 150</Text>
          </View>
          <View style={styles.shopCont}>
          <Image
            style={styles.shopIcon}
            source={require('./assets/shop.png')}
          />
          </View>
          </View>

          <View  style={styles.productright}>
          <Image
            style={styles.itemimg}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={styles.proname}>
            Air Jorden
          </Text>
          <Text style={styles.prdetail}>
            Hustle Edition
          </Text>
          <View>
            <Text style={styles.proPrice}>₹ 150</Text>
          </View>
          <View style={styles.shopCont}>
          <Image
            style={styles.shopIcon}
            source={require('./assets/shop.png')}
          />
          </View>
          </View>
        </View>
        <View style={{flexDirection: 'row',}}>

          <View  style={styles.productleft}>
          <Image
            style={styles.itemimg}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={styles.proname}>
            Air Jorden
          </Text>
          <Text style={styles.prdetail}>
            Hustle Edition
          </Text>
          <View>
            <Text style={styles.proPrice}>₹ 150</Text>
          </View>
          <View style={styles.shopCont}>
          <Image
            style={styles.shopIcon}
            source={require('./assets/shop.png')}
          />
          </View>
          </View>

          <View  style={styles.productright}>
          <Image
            style={styles.itemimg}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={styles.proname}>
            Air Jorden
          </Text>
          <Text style={styles.prdetail}>
            Hustle Edition
          </Text>
          <View>
            <Text style={styles.proPrice}>₹ 150</Text>
          </View>
          <View style={styles.shopCont}>
          <Image
            style={styles.shopIcon}
            source={require('./assets/shop.png')}
          />
          </View>
          </View>
        </View>
        <View style={{flexDirection: 'row',}}>

          <View  style={styles.productleft}>
          <Image
            style={styles.itemimg}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={styles.proname}>
            Air Jorden
          </Text>
          <Text style={styles.prdetail}>
            Hustle Edition
          </Text>
          <View>
            <Text style={styles.proPrice}>₹ 150</Text>
          </View>
          <View style={styles.shopCont}>
          <Image
            style={styles.shopIcon}
            source={require('./assets/shop.png')}
          />
          </View>
          </View>

          <View  style={styles.productright}>
          <Image
            style={styles.itemimg}
            source={{
              uri: 'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
          />
          <Text style={styles.proname}>
            Air Jorden
          </Text>
          <Text style={styles.prdetail}>
            Hustle Edition
          </Text>
          <View>
            <Text style={styles.proPrice}>₹ 150</Text>
          </View>
          <View style={styles.shopCont}>
          <Image
            style={styles.shopIcon}
            source={require('./assets/shop.png')}
          />
          </View>
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
      }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    marginLeft: 140,
    marginTop: 18,
    borderRadius: 41,
    width: 82,
    height: 83,
  },
  shopping: {
    marginLeft:90,
    marginTop: 24,
    borderRadius: 41,
    opacity: 0.5
  },
  row1:{
    width: '100%',
    flexDirection:'row',
  },
  orders:{
    position: 'absolute',
    width: 15,
    height: 15,
    fontSize:10,
    marginLeft:100,
    marginTop: 18,
    backgroundColor: '#5004E0',
    borderRadius:7.5,
    paddingHorizontal:5,
    paddingVertical:0.5,
    color: 'white'
  },
  shopname:{
    fontSize:15,
    textAlign: 'center',
    marginTop:8,
    fontFamily: "Poppins-Medium",
  },
  shoptime:{
    fontSize:12,
    fontFamily: "Poppins-Medium",
    textAlign: 'center',
    color:'#78909C',
  },
  shopdetails:{
    marginLeft:107,
    width:170,
    fontFamily: "Poppins-Medium",
    fontSize:11,
    textAlign: 'center',
    color:'#78909C',
  },
  input:{
    height: 56,
    margin: 20,
    borderRadius:14,
    paddingLeft: 34,
    paddingRight: 42,
    backgroundColor:"#00000008"
  },
  searchicon:{
    width:20,
    height: 20,
    position: 'absolute',
    marginLeft:29,
    marginTop: 39,
    opacity:0.5,
  },
  tuneicon:{
    height: 17.87,
  },
  tunecon:{
    position: 'absolute',
    marginLeft:301,
    justifyContent: 'center',
    borderRadius:14,
    marginTop:26.375,
    height: 43.25,
    width: 43.25,
    backgroundColor: '#5004E0',
    paddingHorizontal: 15
  },
  gridlist:{
    height: 14,
    marginLeft:14,
    marginBottom:20,
    opacity:0.5,
  },
  row2:{
    width: '100%',
    flexDirection:'row',
  },
  accessories:{
    height: 45,
    marginHorizontal:14,
    paddingVertical:7,
  },
  selectedcat:{
    color: 'white',
    fontSize:14,
  },
  cat:{
    color:'#5004E0',
    fontSize:14,
  },
  selectedcon:{
    backgroundColor:'#5004E0',
    paddingVertical: 4.5,
    paddingHorizontal: 20,
    shadowRadius:3,
    shadowColor: '#5004E0',
    borderRadius: 7,
    marginRight: 10
  },
  unselectedcon:{
    backgroundColor:'white',
    borderColor: '#00000029',
    borderWidth:1,
    shadowRadius:3,
    shadowColor: '#00000029',
    paddingVertical: 4,
    paddingHorizontal: 20,
    borderRadius: 7, 
    marginRight: 10
  },
  itemimg:{
    width: 142,
    height: 106,
    borderRadius:14
  },
  shopIcon:{
    width:11, 
    height: 15,
  },
  shopCont:{
    justifyContent:'center',
    width:35,
    height:35,
    position: 'absolute',
    backgroundColor: '#5004E0',
    paddingHorizontal:12,
    borderRadius:10,
    marginLeft: 118,
    marginTop: 170,
  },
  productleft:{
    padding:9,
    width:160,
    height:213,
    marginLeft: 17,
    marginRight: 5,
  },
  productright:{
    padding:9,
    width:160,
    height:213,
    marginLeft: 5,
    marginRight: 17,
  },
  proname:{
    fontSize:15,
    marginTop:20,
    fontFamily: "Poppins-Medium",
  },
  prdetail:{
    fontSize:12,
    color:'#ACABB3',
    fontFamily: "Poppins-Medium",
  },
  proPrice:{
    fontSize:14,
    color:'#5004E0',
    fontFamily: "Poppins-Medium",
  }
});

export default App;