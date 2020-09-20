import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from './styles/global';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitleText}>Reisliebe: Reiskochen für Anfänger</Text>
      <StatusBar style="auto" />
    </View>
  );
}
