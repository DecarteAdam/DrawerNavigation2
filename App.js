import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createSwitchNavigator, createStackNavigator} from 'react-navigation'
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import WelcomeScreen from './screens/WelcomeScreen'





const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp:SignUpScreen
})

export default  createSwitchNavigator ({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
