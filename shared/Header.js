import React, { useStatus } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // part of expo
import { globalStyles } from '../styles/global';

export default function Header({ navigation, title }) {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return(
    <View style={globalStyles.header}>
      <MaterialCommunityIcons 
        style={globalStyles.headerMenuIcon}
        name="format-list-bulleted-type" 
        size={24} 
        color="white" 
        onPress={openMenu}
      />
      <Text style={globalStyles.headerText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText: {
    color: 'white'
  }
})