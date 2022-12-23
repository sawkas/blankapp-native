import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { navigationRef } from './helpers/navigation'

import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen'
import ServerIsDownScreen from './screens/ServerIsDownScreen'

const Stack = createNativeStackNavigator()

function AppContainer () {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />

        <Stack.Screen name="ServerIsDownScreen" component={ServerIsDownScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
