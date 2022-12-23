import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Button } from 'react-native'

import Client from '../../client'
import { UserContext } from '../../contexts/UserContext'
import Auth from '../../storage/auth'

function HomeScreen ({ navigation }) {
  const { user, setUser, userId, setUserId } = useContext(UserContext)

  const fetchMe = async () => {
    const { data } = await Client.me.index()

    setUser(data)
  }

  useEffect(() => {
    fetchMe()
  }, [userId])

  const signOut = async () => {
    Auth.removeToken()

    setUserId(null)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Hello {user.full_name}</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  )
}

export default HomeScreen
