import React from 'react'
import { useUser } from '../../contexts/UserContext'
import { Text, StyleSheet } from 'react-native'
import BaseLayout from '../../components/BaseLayout'

function HomeScreen ({ navigation }) {
  const [{ user }] = useUser()

  return (
    <BaseLayout screenStyles={styles.container}>
      <Text>Home Screen</Text>
      <Text>Hello {user.full_name}</Text>
    </BaseLayout>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen
