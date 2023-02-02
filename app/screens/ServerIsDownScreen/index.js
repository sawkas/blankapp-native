import React, { useEffect, useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import Client from '../../client'
import { useUser } from '../../contexts/UserContext'

import Loading from '../../components/Loading'

function ServerIsDownScreen ({ navigation }) {
  const [{ user }] = useUser()
  const [pong, setPong] = useState(false)

  const ping = async () => {
    console.log('ping!')

    const { status } = await Client.ping.index()

    if (status === 'ok') { setPong(true) }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (pong === true) {
        navigation.navigate(user ? 'Home' : 'SignIn')

        return
      }

      ping()
    }, 1000)

    return () => clearInterval(interval)
  }, [pong])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 10 }}>Trying to connect to the server</Text>
      <Loading/>
    </SafeAreaView>
  )
}

export default ServerIsDownScreen
