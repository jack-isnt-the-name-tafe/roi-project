import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import MainNavigator from '../navigation/MainNavigator';

export default function MainScreen(props) {
  return (
    <NavigationContainer>
        <MainNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});