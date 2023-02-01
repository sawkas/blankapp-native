import React from 'react'
import { Text, StyleSheet } from 'react-native'
import NavigationContainer from '../../components/NavigationContainer'

function NewScam ({ navigation }) {
  return (
    <NavigationContainer navigation={navigation} screenStyles={styles.container}>
      <Text>New Scam</Text>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NewScam
