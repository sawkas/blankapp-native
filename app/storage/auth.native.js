import * as SecureStore from 'expo-secure-store'

const Auth = {}

export const TOKEN_KEY = 'AUTH_TOKEN'

Auth.getToken = async () => {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY)
  } catch (error) { return {} }
}

Auth.setToken = async (token) => {
  await SecureStore.setItemAsync(TOKEN_KEY, token)
}

Auth.removeToken = async () => {
  await SecureStore.deleteItemAsync(TOKEN_KEY)
}

export default Auth
