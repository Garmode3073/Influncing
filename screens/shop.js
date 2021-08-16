import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar, Image, View, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import { ShopPost } from '../Components';

const Shop = () =>{
  
    
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
        source={require('../assets/icons/cart.png')}
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
        source={require('../assets/icons/tune.png')}
      />
      </View>
        <Image
        style={styles.searchicon}
        source={require('../assets/icons/search.png')}
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
        source={require('../assets/icons/list.png')}
      />
      <Image
        style={styles.gridlist}
        source={require('../assets/icons/grid.png')}
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

        <View style={{flexDirection: 'row', flex: 1}}>
          <ShopPost left={true}/>
          <ShopPost left={false}/>
        </View>

        <View style={{flexDirection: 'row',}}>
          <ShopPost left={true}/>
          <ShopPost left={false}/>
        </View>

        <View style={{flexDirection: 'row',}}>
          <ShopPost left={true}/>
          <ShopPost left={false}/>
        </View>

        <View style={{flexDirection: 'row', marginBottom: "10%"}}>
          <ShopPost left={true}/>
          <ShopPost left={false}/>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    marginLeft: "40%",
    marginTop: "6%",
    borderRadius: 41,
    width: "20%",
    height: "80.7%",
  },
  shopping: {
    marginLeft:"46%",
    marginTop: "13%",
    opacity: 0.5
  },
  row1:{
    width: '100%',
    height: "8%",
    flexDirection:'row',
  },
  orders:{
    position: 'absolute',
    width: "8%",
    height: "17%",
    fontSize:10,
    marginLeft:"52%",
    marginRight:"40%",
    marginTop: "10%",
    backgroundColor: '#5004E0',
    borderRadius:7.5,
    paddingHorizontal:5,
    paddingVertical:0.5,
    color: 'white'
  },
  shopname:{
    fontSize:15,
    textAlign: 'center',
    marginTop:"3%",
    fontFamily: "Poppins-Medium",
  },
  shoptime:{
    fontSize:12,
    fontFamily: "Poppins-Medium",
    textAlign: 'center',
    color:'#78909C',
  },
  shopdetails:{
    marginHorizontal:"25%",
    width:"50%",
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
    height: "40%",
  },
  tunecon:{
    position: 'absolute',
    marginLeft:"83%",
    marginRight: "4%",
    justifyContent: 'center',
    borderRadius:14,
    marginTop:"7%",
    height: "48%",
    width: "17%",
    backgroundColor: '#5004E0',
    paddingHorizontal: "4.5%"
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
});

export default Shop;