// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';


const Drawer = createDrawerNavigator();



function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/a.png')}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} /> 
        {/*<Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;