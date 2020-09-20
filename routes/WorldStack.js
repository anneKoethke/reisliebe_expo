import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import World from '../screens/World';
import Header from '../shared/Header';

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
         options={({navigation}) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='Weltkarte' />
            }
          }
        }
      />
    </Navigator>
);


export default WorldStack;