import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function World() {
  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitleText}>WorldScreen</Text>
      <Text style={globalStyles.screenParagraph}>Weltkarte mit den Anbaugebieten</Text>
      <Text style={globalStyles.screenParagraph}>Welche Sorte kommt woher?</Text>
      <Text style={globalStyles.screenParagraph}>1. Land anklicken: Details mit Reissorten (Verknüpfung zu Details mit Zubereitung?</Text>
      <Text style={globalStyles.screenParagraph}>2. Sorte auswählen -> Anbauländer werden gehighlighted</Text>
    </View>
  )
}