import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#e91e63"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="ios-albums" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

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