import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { navigationRef } from './helpers/navigation'

import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen'
import ProfileScreen from './screens/ProfileScreen'
import NewScamScreen from './screens/NewScamScreen'
import FreindsScreen from './screens/FreindsScreen'

import ServerIsDownScreen from './screens/ServerIsDownScreen'

const Stack = createNativeStackNavigator()

function AppContainer () {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false, animation: 'none' }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewScam" component={NewScamScreen} />
        <Stack.Screen name="Freinds" component={FreindsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen name="ServerIsDownScreen" component={ServerIsDownScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
