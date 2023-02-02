import React, { useEffect, useState } from 'react'
import { useUser, setUser } from '../../contexts/UserContext'
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env'
import { SafeAreaView, View } from 'react-native'

import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin'

import Client from '../../client'
import Auth from '../../storage/auth'

import Loading from '../../components/Loading'

function SignInScreen ({ navigation }) {
  const [, dispatch] = useUser()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      offlineAccess: true
    })
  }, [])

  const GoogleAuth = async () => {
    try {
      setIsLoading(true)

      // await GoogleSignin.hasPlayServices() // only for Android
      const googleAuthResult = await GoogleSignin.signIn()
      // TODO: probably one request to API is enough
      const authResponse = await Client.auth.googleSignIn({ id_token: googleAuthResult.idToken })

      await Auth.setToken(authResponse.token)

      setIsLoading(false)

      setUser(dispatch, authResponse.user)
    } catch (error) {
      setIsLoading(false)

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        alert('User cancelled the login flow !')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress')
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google play services not available or outdated !')
      } else {
        console.log(error)
      }
    }
  }

  if (isLoading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#262132' }}>
        <Loading/>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#262132' }}>
      <View>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={GoogleAuth}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen
