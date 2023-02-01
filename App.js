/* eslint-disable react/display-name */

import React from 'react'
import { StatusBar } from 'react-native'
import AppContainer from './app/AppContainer'
import { UserProvider } from './app/contexts/UserContext'

StatusBar.setBarStyle('dark-content', true)

export default function () {
  return (
    <UserProvider>
      <AppContainer />
    </UserProvider>
  )
}
