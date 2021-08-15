import React from 'react';
import {SafeAreaView} from 'react-native';
import { useFonts } from 'expo-font';
import {Shop} from './screens';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const App = () =>{
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }
      initialRouteName="Shop"
      >
        <Stack.Screen name="Shop" component={Shop}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}


export default App;