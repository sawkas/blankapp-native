import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { navigationRef } from './helpers/navigation'

import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen'
import ProfileScreen from './screens/ProfileScreen'
import NewScamScreen from './screens/NewScamScreen'
import FreindsScreen from './screens/FreindsScreen'

import ServerIsDownScreen from './screens/ServerIsDownScreen'
import { useUser } from './contexts/UserContext'

import HomeSvg from '../assets/icons/home.svg'
import AccountSvg from '../assets/icons/account.svg'
import FriendsSvg from '../assets/icons/friends.svg'
import PlusSvg from '../assets/icons/plus.svg'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function BottomTabs () {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, animation: 'none', tabBarStyle: { backgroundColor: '#161024', borderColor: '#161024' } }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <HomeSvg width={size} height={size} fill={color} stroke={color} />
        )
      }}/>
      <Tab.Screen name="NewScam" component={NewScamScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <PlusSvg width={size} height={size} fill={color} stroke={color} />
        )
      }}/>
      <Tab.Screen name="Freinds" component={FreindsScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <FriendsSvg width={size} height={size} fill={color} stroke={color} />
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <AccountSvg width={size} height={size} fill={color} stroke={color} />
        )
      }}/>
    </Tab.Navigator>
  )
}

function authenticatedScreens () {
  return (
    <>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </>
  )
}

function notAuthenticatedScreens () {
  return (
    <>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </>
  )
}

function AppContainer () {
  const [{ user }] = useUser()

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="SignIn" screenOptions={{ headerShown: false, animation: 'none' }}>
        { user ? authenticatedScreens() : notAuthenticatedScreens()}

        <Stack.Screen name="ServerIsDownScreen" component={ServerIsDownScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
