import React, { useContext, useEffect, useState } from 'react'
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env'
import {
  Button, SafeAreaView, View, StyleSheet, TextInput, Text
} from 'react-native'

import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import Client from '../../client'

import { UserContext } from '../../contexts/UserContext'

import Auth from '../../storage/auth'

function SignInScreen ({ navigation }) {
  const { setUserId } = useContext(UserContext)

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      offlineAccess: true
    })
  }, [])

  const GoogleAuth = async () => {
    try {
      await GoogleSignin.hasPlayServices()

      const googleAuthResult = await GoogleSignin.signIn()

      await googleSignIn(googleAuthResult.idToken)
    } catch (error) {
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

  const googleSignIn = async (idToken) => {
    const { data } = await Client.auth.googleSignIn({ id_token: idToken })

    setUserId(data.user_id)

    await Auth.setToken(data.token)

    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={GoogleAuth}
          // disabled={this.state.isSigninInProgress}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen
