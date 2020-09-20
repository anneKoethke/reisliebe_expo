import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/About';
import Header from '../shared/Header';

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
        options={({navigation}) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='Über Reisliebe' />
            }
          }
        }
      />
    </Navigator>
);

export default AboutStack;