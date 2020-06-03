import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeComponent from '../src/Components/HomeComponent';
import Cart from '../src/Components/CartComponent';
const Stack = createStackNavigator();

export const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeComponent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="cart"
        component={Cart}
        options={{
          title: 'My Cart',
          // headerTransparent: true,
          headerBackTitleVisible: false,
          headerTintColor:'white',
         headerStyle:{
           backgroundColor:'#192B45',
         }
          
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
