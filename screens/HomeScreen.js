import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HOme Screen</Text>
        <Button title="Go to details screen" onPress={() => navigation.navigate('Details')}></Button>
      </View>
    );
  }
  
export default HomeScreen;  