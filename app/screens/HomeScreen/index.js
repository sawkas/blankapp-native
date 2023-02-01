import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

import Client from '../../client'
import Loading from '../../components/Loading'
import NavigationContainer from '../../components/NavigationContainer'

function HomeScreen ({ navigation }) {
  const { user, setUser, userId } = useContext(UserContext)

  const [isLoading, setIsLoading] = useState(true)

  const fetchMe = async () => {
    setIsLoading(true)

    const { data } = await Client.me.index()

    setUser(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMe()
  }, [userId])

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading/>
      </SafeAreaView>
    )
  }

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
