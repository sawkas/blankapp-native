import AsyncStorage from '@react-native-async-storage/async-storage';

const Auth = {}

export const CREDENTIALS_KEY = 'AUTH_CREDENTIALS'

Auth.getCredentials = async () => {
  try {
    return await AsyncStorage.getItem(CREDENTIALS_KEY).then((value) => value ? JSON.parse(value) : {})
  } catch (error) { return {} }
}

Auth.setCredentials = async ({client, expiry, uid, accessToken}) => {
  return await AsyncStorage.setItem(CREDENTIALS_KEY, JSON.stringify({client, expiry, uid, accessToken}))
}

Auth.removeCredentials = async () => {
  return await AsyncStorage.removeItem(CREDENTIALS_KEY)
}

export default Auth
