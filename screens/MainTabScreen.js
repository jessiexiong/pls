import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Feed"
    style={{ backgroundColor: 'tomato' }}
  >
    <Tab.Screen
      name='Home'
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
      name="Profile" //this name is what you use to help navigate
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',

        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Explore',

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
          backgroundColor: '#fff',
        },
        headerTintColor: '#006400',
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
        color='#006400'
        backgroundColor='#fff' onPress={() => navigation.openDrawer
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
      backgroundColor: '#333',
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
        backgroundColor='#333' onPress={() => navigation.openDrawer
        ()}>

        </Icon.Button>
    )
  }}
    />

</DetailsStack.Navigator>

);

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#555',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
    
      <ProfileStack.Screen 
      name="Profile" 
      component={ProfileScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={30}
          color='#000'
            backgroundColor='#555' onPress={() => navigation.openDrawer
            ()}>
    
            </Icon.Button>
        )
      }}
        />
    
    </ProfileStack.Navigator>
    );

const ExploreStackScreen = ({navigation}) => (
    <ExploreStack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
    
      <ExploreStack.Screen 
      name="Explore" 
      component={ExploreScreen} 
      options={{
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={30}
            backgroundColor='#222' onPress={() => navigation.openDrawer
            ()}>
    
            </Icon.Button>
        )
      }}
        />
    
    </ExploreStack.Navigator>
    );