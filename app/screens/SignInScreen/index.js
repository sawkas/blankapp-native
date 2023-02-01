import React, { useEffect, useState } from 'react'
import { useUser, setUser } from '../../contexts/UserContext'
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env'
import { SafeAreaView, View } from 'react-native'

import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin'

import Client from '../../client'
import Auth from '../../storage/auth'

import Loading from '../../components/Loading'

function SignInScreen ({ navigation }) {
  const [{ user }, dispatch] = useUser()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // if (user) {
    //   navigation.navigate('Home')
    //   return
    // }

    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      offlineAccess: true
    })
  }, [user])

  const GoogleAuth = async () => {
    try {
      setIsLoading(true)

      await GoogleSignin.hasPlayServices() // only for Android

      const googleAuthResult = await GoogleSignin.signIn()

      await signIn(googleAuthResult.idToken)
    } catch (error) {
      setIsLoading(false)

      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('User cancelled the login flow !')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress')
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('Google play services not available or outdated !')
        // play services not available or outdated
      } else {
        console.log(error)
      }
    }
  }

  const signIn = async (idToken) => {
    // TODO: probably one request in enough
    const authResponse = await Client.auth.googleSignIn({ id_token: idToken })
    await Auth.setToken(authResponse.data.token)

    const meResponse = await Client.me.index()
    setUser(dispatch, meResponse.data)
    setIsLoading(false)

    navigation.navigate('Home')
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
