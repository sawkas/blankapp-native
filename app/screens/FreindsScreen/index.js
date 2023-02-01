import React from 'react'
import { Text, StyleSheet } from 'react-native'
import NavigationContainer from '../../components/NavigationContainer'

function Freinds ({ navigation }) {
  return (
    <NavigationContainer navigation={navigation} screenStyles={styles.container}>
      <Text>Freinds</Text>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Freinds
