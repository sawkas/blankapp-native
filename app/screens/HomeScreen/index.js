import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

import Client from '../../client'
import { UserContext } from '../../contexts/UserContext'
import Auth from '../../storage/auth'
import Loading from '../../components/Loading'

function HomeScreen ({ navigation }) {
  const { user, setUser, userId, setUserId } = useContext(UserContext)

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

  const signOut = async () => {
    Auth.removeToken()

    setUserId(null)
  }

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading/>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Hello {user.full_name}</Text>
      <Button title="Sign out" onPress={signOut} />
    </SafeAreaView>
  )
}

export default HomeScreen
