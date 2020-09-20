import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home() {

  // Liste aller Sorten (FlatList?)
  const [riceData, setRiceData] = useState([/* Reisdatensatz */]);
  // TODO: State für die Suche

  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitleText}>HomeScreen</Text>
      <Text style={globalStyles.screenParagraph}>Suchfunktion um schneller den richtigen Reis zu finden (Modal?)</Text>
      <Text style={globalStyles.screenParagraph}>Übersicht über die verschiedenen Reissorten und deren Zubereitung</Text>
      <Text style={globalStyles.screenParagraph}>Details um Mengen zu ändern?</Text>
    </View>
  )
}