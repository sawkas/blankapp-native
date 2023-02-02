import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'

export const BaseLayout = ({ children, screenStyles }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ ...styles.screen, ...screenStyles }} >
        {children}
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
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20
  }
})

export default BaseLayout
