import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ErrorScreen from '../screens/ErrorScreen';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        name='Sign Up'
        component={SignUpScreen}
      />
      <Stack.Screen
        name='Error'
        component={ErrorScreen}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});