import * as SecureStore from 'expo-secure-store'

const Auth = {}

export const TOKEN_KEY = 'jwt'

Auth.getToken = async () => {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY)
  } catch (error) {}
}

Auth.setToken = async (value) => {
  await SecureStore.setItemAsync(TOKEN_KEY, value)
}

Auth.removeToken = async () => {
  await SecureStore.deleteItemAsync(TOKEN_KEY)
}

export default Auth
