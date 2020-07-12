import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

function ExploreScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />

    </View>
  );
}

export default ExploreScreen;