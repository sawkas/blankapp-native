import React from 'react'
import { useUser } from '../../contexts/UserContext'
import { Text, StyleSheet } from 'react-native'
import NavigationContainer from '../../components/NavigationContainer'

function HomeScreen ({ navigation }) {
  const [{ user }] = useUser()

  return (
    <NavigationContainer navigation={navigation} screenStyles={styles.container}>
      <Text>Home Screen</Text>
      <Text>Hello {user.full_name}</Text>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen
