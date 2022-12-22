/* eslint-disable react/display-name */

import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import AppContainer from './app/AppContainer'
import { UserContext } from './app/contexts/UserContext'

StatusBar.setBarStyle('dark-content', true)

export default function () {
  const [user, setUser] = useState({}) // { id: 1, username: 'Test', avatar_url: 'url' }
  const [userId, setUserId] = useState(null) // { id: 1, username: 'Test', avatar_url: 'url' }

  return (
    <UserContext.Provider value={{ user, setUser, userId, setUserId }}>
      <AppContainer />
    </UserContext.Provider>
  )
}
