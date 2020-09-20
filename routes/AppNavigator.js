import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack';
import WorldStack from './WorldStack';
import AboutStack from './AboutStack';

const { Navigator, Screen } = createDrawerNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName="HomeStack">
      <Screen name="Home" component={HomeStack} />
      <Screen name="World" component={WorldStack} />
      <Screen name="About" component={AboutStack} />
    </Navigator>
  </NavigationContainer>
);