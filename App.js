// In App.js in a new project

import * as React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
      <HomeStack.Navigator  screenOptions={{
          headerStyle: {
            backgroundColor: '#006400',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        >
        <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ 
        title: 'Envirobuddy', 
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={30}
          backgroundColor='#006400' onPress={() => navigation.openDrawer
          ()}>

          </Icon.Button>
        )
        //headerTitle: props => <LogoTitle {...props} />
      }}
        />

      </HomeStack.Navigator>

);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator
            screenOptions={{
      headerStyle: {
        backgroundColor: '#006400',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
    >

    <DetailsStack.Screen 
    name="Details" 
    component={DetailsScreen} 
    options={{
      headerLeft: () => (
        <Icon.Button name='ios-menu' size={30}
          backgroundColor='#006400' onPress={() => navigation.openDrawer
          ()}>

          </Icon.Button>
      )
    }}
      />

  </DetailsStack.Navigator>

);

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
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;