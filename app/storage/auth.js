import AsyncStorage from '@react-native-async-storage/async-storage'

const Auth = {}

export const TOKEN_KEY = 'AUTH_TOKEN'

Auth.getToken = async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY)
  } catch (error) { return {} }
}

Auth.setToken = async (token) => {
  return await AsyncStorage.setItem(TOKEN_KEY, token)
}

Auth.removeToken = async () => {
  return await AsyncStorage.removeItem(TOKEN_KEY)
}

export default Auth
