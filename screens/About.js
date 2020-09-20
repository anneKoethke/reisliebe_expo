import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {

  return(
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitleText}>...aus Liebe zum Reis!</Text>
      <Text style={globalStyles.screenParagraph}>Diese kleine App soll als Hilfestellung zum Reiskochen dienen, damit der Reis immer perfekt wird.</Text>
      <Text style={globalStyles.screenParagraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam expedita dolore, doloribus ratione modi tenetur facilis amet cupiditate perferendis quaerat ad a, consequatur quod rerum rem sit. Quisquam architecto, iusto, culpa enim, incidunt vel id quas aspernatur reiciendis exercitationem in quam rerum voluptate a quasi. Quas est sunt perferendis quos.</Text>
    </View>
  )
}