import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
//import EntryDetails from '../screens/entryDetails';
import Header from '../shared/Header';

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black'
        }
      }}
    >
      <Screen 
        name="Home" 
        component={Home}
        options={({navigation}) => {
            return {
              headerTitle: () => <Header navigation={navigation} title='Reisliebe' />
            }
          }
        }
      />
    </Navigator>
);


export default HomeStack;