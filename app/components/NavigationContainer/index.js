import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import NavigationIconButton from '../NavigationIconButton'

export const NavigationContainer = ({ children, navigation, screenStyles }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.screen, ...screenStyles }} >
        {children}
      </View>
      <View style={styles.navigation}>
        <NavigationIconButton navigation={navigation} icon='home' screen='Home' />
        <NavigationIconButton navigation={navigation} icon='plus' screen='NewScam' />
        <NavigationIconButton navigation={navigation} icon='friends' screen='Freinds' />
        <NavigationIconButton navigation={navigation} icon='account' screen='Profile' />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262132'
  },
  screen: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#161024'
  }
})

export default NavigationContainer
