import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button 
      title = 'Details'
      onPress = {() =>navigation.navigate('Details')}
      />
    </View>
  );
}



  export default HomeScreen;