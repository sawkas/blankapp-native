import * as SecureStore from 'expo-secure-store'

const Auth = {}

export const CREDENTIALS_KEY = 'AUTH_CREDENTIALS'

Auth.getCredentials = async () => {
  try {
    return await SecureStore.getItemAsync(CREDENTIALS_KEY).then((value) => value ? JSON.parse(value) : {})
  } catch (error) { return {} }
}

Auth.setCredentials = async ({ client, expiry, uid, accessToken }) => {
  await SecureStore.setItemAsync(CREDENTIALS_KEY, JSON.stringify({ client, expiry, uid, accessToken }))
}

Auth.removeCredentials = async () => {
  await SecureStore.deleteItemAsync(CREDENTIALS_KEY)
}

export default Auth
