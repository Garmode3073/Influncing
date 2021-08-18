import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import { useFonts } from 'expo-font';
import {Shop, Wallet, SignUp, Page67, CartPage} from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () =>{
  let [fontsLoaded] = useFonts({
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.otf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.otf'),
  });

  if (!fontsLoaded) {
    return (<SafeAreaView>
      <Image
        source={require('./assets/splash.png')}
      />
    </SafeAreaView>);
  } else {

  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }
      initialRouteName="CartPage"

      >
        <Stack.Screen name="CartPage" component={CartPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
    }
}


export default App;