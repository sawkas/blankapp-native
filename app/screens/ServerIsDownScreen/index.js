import React, { useEffect, useState, useContext } from 'react'
import { View, Text } from 'react-native'
import Client from '../../client'
import { UserContext } from '../../contexts/UserContext'

function ServerIsDownScreen ({ navigation }) {
  const [pong, setPong] = useState(false)

  const { setUserId } = useContext(UserContext)

  const ping = async () => {
    console.log('ping!')

    const { data } = await Client.ping.index()

    if (data.status === 'ok') { setPong(true) }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (pong === true) {
        setUserId(0) // to refetch me

        navigation.navigate('Home')
      }

      ping()
    }, 1000)

    return () => clearInterval(interval)
  }, [pong])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Server is down</Text>
    </View>
  )
}

export default ServerIsDownScreen
