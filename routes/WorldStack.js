import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import World from '../screens/World';

const { Navigator, Screen } = createStackNavigator();

const WorldStack = () => (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        }
      }}
    >
      <Screen 
        name="World" 
        component={World}
      />
    </Navigator>
);


export default AboutStack;