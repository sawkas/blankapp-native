import React from 'react'
import { Text, StyleSheet } from 'react-native'
import BaseLayout from '../../components/BaseLayout'

function NewScam ({ navigation }) {
  return (
    <BaseLayout screenStyles={styles.container}>
      <Text>New Scam</Text>
    </BaseLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NewScam
