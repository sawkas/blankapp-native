import React from 'react'
import { Text, StyleSheet } from 'react-native'
import BaseLayout from '../../components/BaseLayout'

function Freinds ({ navigation }) {
  return (
    <BaseLayout screenStyles={styles.container}>
      <Text>Freinds</Text>
    </BaseLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Freinds
