import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { AppNavigator } from './routes/AppNavigator';

const getFonts = () => Font.loadAsync({
  'spicy-rice': require('./assets/fonts/SpicyRice-Regular.ttf'),
  'dosis-regular': require('./assets/fonts/Dosis-Regular.ttf'),
  'dosis-light': require('./assets/fonts/Dosis-Light.ttf'),
  'dosis-extra-light': require('./assets/fonts/Dosis-ExtraLight.ttf')
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return <AppNavigator />;
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
