import Api from '../helpers/api'

export const Auth = {
  signUp: (params) => Api.postWithPromise('auth', params),
  signIn: (params) => Api.postWithPromise('auth/sign_in', params),
  signOut: (params) => Api.deleteWithPromise('auth/sign_out', params),
  googleSignIn: (params) => Api.postWithPromise('auth/google', params)
}
