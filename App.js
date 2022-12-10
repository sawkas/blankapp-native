import React, { createContext, useState } from 'react'
import { StatusBar } from 'react-native'
import AppContainer from './app/AppContainer'

StatusBar.setBarStyle('dark-content', true)

export default function () {
  const UserContext = createContext()
  const [user, setUser] = useState({}) // { id: 1, username: 'Test', avatar_url: 'url' }

  return(
    <UserContext.Provider value={{user, setUser}}>
      <AppContainer />
    </UserContext.Provider>
  )
}
