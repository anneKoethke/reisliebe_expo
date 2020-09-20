import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {

  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitleText}>AboutScreen</Text>
    </View>
  )
}