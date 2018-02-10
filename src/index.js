import React, { Component } from 'react';
import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Profile from './scenes/profile'
import Posts from './scenes/posts'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App = StackNavigator({
  Posts: { screen: Posts },
  Profile: { screen: Profile }
})

export default App
