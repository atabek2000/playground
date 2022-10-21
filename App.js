import MainScreen from './screens/MainScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Numbers from './screens/Numbers';
import Colors from './screens/Colors';
import Figures from './screens/Figures';
import Animals from './screens/Animals';
import Weathers from './screens/Weather';
import Fruits from './screens/Fruits';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name='Home' component={MainScreen} options={{title: 'Main page'}}></Stack.Screen>

          <Stack.Screen name={'Numbers'} component={Numbers} options={{title: 'Game'}}></Stack.Screen>
          <Stack.Screen name={'Colors'} component={Colors} options={{title: 'Colors'}}></Stack.Screen>
          <Stack.Screen name={'Figures'} component={Figures} options={{title: 'Figures'}}></Stack.Screen>
          <Stack.Screen name={'Animals'} component={Animals} options={{title: 'Animals'}}></Stack.Screen>
          <Stack.Screen name={'Weathers'} component={Weathers} options={{title: 'Weathers'}}></Stack.Screen>
          <Stack.Screen name={'Fruits'} component={Fruits} options={{title: 'Fruits'}}></Stack.Screen>
          
      </Stack.Navigator>
  </NavigationContainer>
  );
}