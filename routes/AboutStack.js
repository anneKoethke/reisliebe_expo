import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        }
      }}
    >
      <Screen 
        name="About" 
        component={About}
      />
    </Navigator>
);

export default AboutStack;