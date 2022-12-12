import Api from '../helpers/api'

export const Auth = {
  signUp: (params) => Api.postWithPromise('api/auth', params),
  signIn: (params) => Api.postWithPromise('api/auth/sign_in', params),
  signOut: (params) => Api.deleteWithPromise('api/auth/sign_out', params),
}
